import { ProductsList } from '../ProductsList'
import { ProductsListItem } from '../ProductsList/item'

type ProductsSectionProp = {
  sectionName: string
  category: string
}

export function ProductsSection({
  category,
  sectionName,
}: ProductsSectionProp) {
  return (
    <section>
      <h4>{sectionName}</h4>
      <ProductsList />
    </section>
  )
}
