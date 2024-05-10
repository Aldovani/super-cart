type SupermarketListProps = {
  children: React.ReactNode
}

export function SupermarketList({ children }: SupermarketListProps) {
  return <ul className="mt-6 grid gap-x-3 gap-y-4 grid-cols-3">{children}</ul>
}
