import { useEffect, useState } from 'react'
import { LanguageContext } from './language-context'
import { content } from '../data/content'

const STORAGE_KEY = 'portfolio-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'es'
    } catch {
      return 'es'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage no disponible (modo privado, etc.)
    }
  }, [lang])

  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
