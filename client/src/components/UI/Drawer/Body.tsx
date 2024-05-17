type BodyProps = {
  children: React.ReactNode
  className?: string
}

export function Body({ children, className }: BodyProps) {
  return <div className={className}>{children}</div>
}
