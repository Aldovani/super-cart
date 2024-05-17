import { ProductsFilterItem } from './item'

export function ProductsFilter() {
  return (
    <div className="h-full relative">
      <nav className="sticky top-28 flex flex-col gap-3 min-w-40">
        <ProductsFilterItem initial category="">
          Todos os produtos
        </ProductsFilterItem>
        <ProductsFilterItem category="promocao">Promoção</ProductsFilterItem>
        <ProductsFilterItem category="basicos">
          Alimentos Básicos
        </ProductsFilterItem>
        <ProductsFilterItem category="congelados">
          Congelados{' '}
        </ProductsFilterItem>
        <ProductsFilterItem category="eletronicos">
          Eletro e Eletrônicos{' '}
        </ProductsFilterItem>
        <ProductsFilterItem category="etnicos">Étnicos </ProductsFilterItem>
        <ProductsFilterItem category="frios">
          Frios e Laticínios{' '}
        </ProductsFilterItem>
        <ProductsFilterItem category="higiene">
          Higiene e Cuidados{' '}
        </ProductsFilterItem>
        <ProductsFilterItem category="limpeza">Limpeza </ProductsFilterItem>
        <ProductsFilterItem category="pet shop">Pet Shop </ProductsFilterItem>
        <ProductsFilterItem category="bebidas">Bebidas </ProductsFilterItem>
      </nav>
    </div>
  )
}
