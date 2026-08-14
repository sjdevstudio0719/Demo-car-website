export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <div className={`flex flex-col ${alignment} gap-4 mb-12 md:mb-16`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading-lg max-w-2xl">{title}</h2>
      {description && <p className="body-text max-w-xl">{description}</p>}
    </div>
  )
}
