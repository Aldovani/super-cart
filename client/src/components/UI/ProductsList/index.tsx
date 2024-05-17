import { ProductsListItem } from './item'

export type product = {
  name: string
  id: string
  price: string
  image: string
  description: string
}

export function ProductsList() {
  return (
    <ul className="grid grid-flow-col overflow-x-scroll  justify-between gap-3 ">
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
      <ProductsListItem />
    </ul>
  )
}
