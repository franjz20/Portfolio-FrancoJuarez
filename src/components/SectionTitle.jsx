export default function SectionTitle({ index, title }) {
  return (
    <div className="mb-10 flex items-center gap-4 sm:mb-14">
      <h2 className="text-2xl font-bold whitespace-nowrap text-text sm:text-3xl">
        <span className="mr-2 font-mono text-lg text-accent sm:text-xl">{index}.</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  )
}
