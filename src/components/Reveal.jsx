import { useReveal } from '../hooks/useReveal'

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
