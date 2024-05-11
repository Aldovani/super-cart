import Image from 'next/image'
import { product } from '.'

type ProductsListItemProps = {
  data?: product
}

export function ProductsListItem({ data }: ProductsListItemProps) {
  return (
    <li>
      <div>
        <Image alt="" src="" />
        <button></button>
      </div>

      <div>
        <h6>R$ 20,00</h6>
        <p>pacote de feijão mene 2k</p>
      </div>
    </li>
  )
}
