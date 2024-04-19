type CategoryProps = {
  children: React.ReactNode
}

export function Category({ children }: CategoryProps) {
  return (
    <span className="border border-gray-200 rounded-lg px-3 py-1 text-gray-500 ">
      {children}
    </span>
  )
}
