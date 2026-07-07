import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic()

const SYSTEM_PROMPT =
  'You are a friendly maths tutor assistant on Mathly, a South African maths education website. ' +
  'You help students from Grade 4 to Grade 12 understand maths concepts. ' +
  'Always explain things clearly and simply. Use examples where helpful. ' +
  'Keep responses concise and encouraging. ' +
  'If a student shares selected text from a study guide, explain it in simpler terms or give an additional example.'

type ApiMessage = { role: 'user' | 'assistant'; content: string }

export async function POST(req: NextRequest) {
  const { messages }: { messages: ApiMessage[] } = await req.json()

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      try {
        const response = await client.messages.create({
          model: 'claude-sonnet-5',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages,
          stream: true,
        })

        for await (const event of response) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
      } catch {
        controller.enqueue(encoder.encode('Sorry, I ran into an error. Please try again.'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
