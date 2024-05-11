import { ProductsListItem } from './item'

export type product = {
  name: string
  id: string
  price: string
  image: string
  descruiption: string
}

type ProductsListProps = {}

export function ProductsList({}: ProductsListProps) {
  /*

    TODO:CHAMA  A API

    */

  return (
    <ul>
      {/* {products.map((product) => ( */}
      <ProductsListItem />
      {/* ))} */}
    </ul>
  )
}
