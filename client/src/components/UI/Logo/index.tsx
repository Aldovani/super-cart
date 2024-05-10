import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href="/"
      className="text-emerald-600 font-bold text-2xl whitespace-nowrap flex items-center"
    >
      Super cart
    </Link>
  )
}
