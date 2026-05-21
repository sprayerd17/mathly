'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import NavAuth from '@/app/components/NavAuth'
import { useAuth } from '@/app/providers'

type Topic = {
  slug: string
  name: string
  description: string
  free: boolean
}

const defaultTopics: Topic[] = [
  {
    slug: 'topic-1',
    name: 'Topic 1',
    description: 'Foundational concepts and key definitions to build your understanding.',
    free: true,
  },
  {
    slug: 'topic-2',
    name: 'Topic 2',
    description: 'Core techniques and step-by-step methods explained clearly.',
    free: true,
  },
  {
    slug: 'topic-3',
    name: 'Topic 3',
    description: 'Visual approaches and real-world applications of the concept.',
    free: false,
  },
  {
    slug: 'topic-4',
    name: 'Topic 4',
    description: 'Practice patterns and common problem types you will encounter.',
    free: false,
  },
  {
    slug: 'topic-5',
    name: 'Topic 5',
    description: 'Deeper exploration with worked examples and key formulas.',
    free: false,
  },
  {
    slug: 'topic-6',
    name: 'Topic 6',
    description: 'Advanced techniques that build on earlier concepts in this grade.',
    free: false,
  },
  {
    slug: 'topic-7',
    name: 'Topic 7',
    description: 'Mixed problem solving with strategy guides and common mistakes to avoid.',
    free: false,
  },
  {
    slug: 'topic-8',
    name: 'Topic 8',
    description: 'Review and consolidation with exam-style questions and model answers.',
    free: false,
  },
]

const grade4Topics: Topic[] = [
  {
    slug: 'topic-1',
    name: 'Whole Numbers — Counting, Ordering & Place Value',
    description: 'Learn about place value, expanded notation, counting in intervals, comparing and ordering numbers, rounding off and number lines.',
    free: true,
  },
  {
    slug: 'topic-2',
    name: 'Addition & Subtraction',
    description: 'Master column addition and subtraction with carrying and borrowing, estimating, inverse operations, mental calculations and money problems.',
    free: true,
  },
  {
    slug: 'topic-3',
    name: 'Multiplication',
    description: 'Understand multiplication as repeated addition, learn your times tables, multiply 2-digit numbers, use factors and estimate products.',
    free: false,
  },
  {
    slug: 'topic-4',
    name: 'Division',
    description: 'Learn sharing and grouping, use multiplication facts to divide, work with remainders, long division and division word problems.',
    free: false,
  },
  {
    slug: 'topic-5',
    name: 'Number Sentences',
    description: 'Understand equations and inequalities, solve open number sentences, find missing values and translate word problems into number sentences.',
    free: false,
  },
  {
    slug: 'topic-6',
    name: 'Common Fractions',
    description: 'Understand fractions as equal parts of a whole, compare and order fractions, find equivalent fractions, calculate a fraction of a whole number and add fractions with the same denominator.',
    free: false,
  },
  {
    slug: 'topic-7',
    name: 'Number Patterns',
    description: 'Identify and extend number patterns, skip count in different intervals, work with input and output values, find missing numbers and create your own patterns.',
    free: false,
  },
  {
    slug: 'topic-8',
    name: 'Geometric Patterns',
    description: 'Identify repeating and growing geometric patterns, extend patterns, explore colour and shape patterns, learn about tessellation and create your own geometric patterns.',
    free: false,
  },
  {
    slug: 'topic-9',
    name: 'Symmetry',
    description: 'Recognise lines of symmetry in 2D shapes, identify shapes with one or more lines of symmetry, draw the other half of a symmetrical figure and find symmetry in real life and the alphabet.',
    free: false,
  },
  {
    slug: 'topic-10',
    name: '2D Shapes',
    description: 'Identify and describe 2D shapes, sort and classify polygons, compare shapes by their properties and find 2D shapes in everyday life.',
    free: false,
  },
  {
    slug: 'topic-11',
    name: '3D Objects',
    description: 'Identify and describe 3D objects, sort and classify by properties, compare 2D shapes with 3D object faces and find 3D objects in everyday life.',
    free: false,
  },
  {
    slug: 'topic-12',
    name: 'Position and Movement',
    description: 'Describe position using direction words, locate objects on a grid using row and column references, follow and give directions and understand full, half and quarter turns clockwise and anticlockwise.',
    free: false,
  },
  {
    slug: 'topic-13',
    name: 'Transformations',
    description: 'Learn about translation (sliding), reflection (flipping) and rotation (turning), build composite shapes and create tessellating patterns using transformations.',
    free: false,
  },
  {
    slug: 'topic-14',
    name: 'Length',
    description: 'Measure and convert between millimetres, centimetres, metres and kilometres, estimate lengths, calculate with length and solve word problems.',
    free: false,
  },
  {
    slug: 'topic-15',
    name: 'Mass',
    description: 'Measure and convert between grams and kilograms, estimate mass, read scales and solve word problems involving mass.',
    free: false,
  },
  {
    slug: 'topic-16',
    name: 'Capacity and Volume',
    description: 'Measure and convert between millilitres and litres, estimate capacity, read measuring containers and calculate volume using unit cubes.',
    free: false,
  },
  {
    slug: 'topic-17',
    name: 'Perimeter and Area',
    description: 'Calculate the perimeter of polygons by adding sides, calculate area by counting square units and solve problems involving perimeter and area.',
    free: false,
  },
  {
    slug: 'topic-18',
    name: 'Time',
    description: 'Read analogue and digital clocks, convert between hours, minutes and seconds, calculate duration and solve time word problems.',
    free: false,
  },
  {
    slug: 'topic-19',
    name: 'Data Handling',
    description: 'Collect and organise data using tally marks, represent data in pictographs and bar graphs, read and interpret graphs and analyse results.',
    free: false,
  },
  {
    slug: 'topic-20',
    name: 'Probability',
    description: 'Use language of probability, identify certain, impossible and uncertain events, list outcomes of experiments and compare predicted with actual results.',
    free: false,
  },
]

function getTopics(grade: string): Topic[] {
  if (grade === '4') return grade4Topics
  return defaultTopics
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default function GradePage() {
  const params = useParams()
  const grade = params.grade as string
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const topics = getTopics(grade)

  // Only restrict after hydration, only when user is logged in and has grades set
  const isRestricted =
    mounted &&
    user !== null &&
    user.grades.length > 0 &&
    !user.grades.includes(Number(grade))

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f1f3d] hover:underline underline-offset-4 transition-all"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
          <NavAuth />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Grade heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1e40af] mb-2">
            Curriculum
          </p>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#0f1f3d' }}>
            Grade {grade}
          </h1>
          {!isRestricted && (
            <p className="text-gray-500">
              Choose a topic below to start learning.{' '}
              <span className="text-[#1e40af] font-medium">Topics 1–2 are free.</span>
            </p>
          )}
        </div>

        {isRestricted ? (
          <div className="flex flex-col items-center text-center py-16 max-w-sm mx-auto">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: '#eff6ff' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#1e40af"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2" style={{ color: '#0f1f3d' }}>
              Grade {grade} is not in your profile
            </h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              This grade has not been added to your profile. Update your grades to access this content.
            </p>
            <Link
              href="/profile"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
              style={{ backgroundColor: '#1e40af' }}
            >
              Update your grades in My Profile
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/grade/${grade}/${topic.slug}`}
                className={`group bg-white rounded-xl p-6 border shadow-sm transition-all ${
                  topic.free
                    ? 'border-gray-100 hover:border-[#1e40af]/30 hover:shadow-md'
                    : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2
                    className={`font-semibold transition-colors ${
                      topic.free
                        ? 'text-[#0f1f3d] group-hover:text-[#1e40af]'
                        : 'text-gray-600 group-hover:text-gray-800'
                    }`}
                  >
                    {topic.name}
                  </h2>
                  <span className="mt-0.5 shrink-0">
                    {topic.free ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#1e40af] border border-blue-200">
                        Free
                      </span>
                    ) : (
                      <span className="text-gray-400 group-hover:text-gray-500 transition-colors">
                        <LockIcon />
                      </span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                <div
                  className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${
                    topic.free
                      ? 'text-[#1e40af] group-hover:gap-1.5'
                      : 'text-gray-400'
                  }`}
                >
                  {topic.free ? (
                    <>Start learning <ChevronRight /></>
                  ) : (
                    <>Subscribe to unlock</>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
