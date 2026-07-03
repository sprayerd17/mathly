import { useAuth } from '@/app/providers'
import { translations } from './translations'

export function useTranslations() {
  const { user } = useAuth()
  const lang = user?.language ?? 'en'
  return translations[lang]
}
