import { Star } from 'lucide-react'
import Link from 'next/link'

export function SupermarketItem() {
  return (
    <li>
      <Link
        href="/supermarkets/587"
        className="flex gap-5 items-center border border-gray-200 rounded-xl  px-4 py-3 bg-white transition-colors hover:bg-gray-50"
      >
        <div className="size-20 bg-gray-200 rounded-lg"></div>
        <div>
          <div className="flex items-center gap-2">
            <h5 className="text-gray-900 font-medium">Mercado Geni</h5>
            <span className="flex items-center gap-1  text-yellow-500">
              <Star className="fill-yellow-500" /> 4.9
            </span>
          </div>
          <p className="text-sm text-gray-400 my-1 ">
            Rua das flores - Matão/SP - 0.5k
          </p>
          <span className="text-emerald-600">Frete grátis</span>
        </div>
      </Link>
    </li>
  )
}
