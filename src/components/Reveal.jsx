import { useReveal } from '../hooks/useReveal'

// Envuelve contenido para animarlo al entrar en el viewport.
// `delay` (ms) permite escalonar elementos de una misma sección.
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
