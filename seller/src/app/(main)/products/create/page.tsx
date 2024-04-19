'use client'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Link } from '@/components/UI/Link'

import { useCreateProduct } from './useCreateProduct'

export default function CreateProductPage() {
  const { register, handleSubmit, errors, getValues } = useCreateProduct()

  return (
    <div className="grid grid-cols-[1fr_30%]">
      <section className="px-8 pt-8">
        <span className="text-gray-400 font-medium">Cadastrar produto</span>

        <form
          onSubmit={handleSubmit(() => {})}
          className="mt-8 w-full gap-x-8 gap-y-4 grid grid-areas-form-product"
        >
          <Input.Label isRequired name="Nome" className="grid-in-name">
            <Input.Field
              placeholder="Nome do produto"
              {...register('name')}
              error={!!errors.name?.message}
            />
          </Input.Label>

          <Input.Label isRequired name="valor" className="grid-in-value">
            <Input.Field
              placeholder="valor do produto"
              {...register('price')}
              error={!!errors.price?.message}
            />
          </Input.Label>

          <Input.Label
            isRequired
            name="quantidade"
            className="grid-in-quantity"
          >
            <Input.Field
              placeholder="quantidade do produto"
              {...register('quantity')}
              error={!!errors.quantity?.message}
            />
          </Input.Label>

          <Input.Label isRequired name="Categoria" className="grid-in-category">
            <Input.Select
              {...register('category')}
              error={!!errors.category?.message}
            >
              <option className="text-gray-400" disabled selected value="none">
                Selecione uma categoria
              </option>
              <option value="killograma">KG</option>
              <option value="litro">Litro</option>
              <option value="peça">PC</option>
            </Input.Select>
          </Input.Label>

          <Input.Label
            isRequired
            name="Tipo de unidade"
            className="grid-in-type"
          >
            <Input.Select {...register('type')} error={!!errors.type?.message}>
              <option className="text-gray-400" disabled selected value="none">
                Selecione uma opção
              </option>
              <option value="killograma">KG</option>
              <option value="litro">Litro</option>
              <option value="peça">PC</option>
            </Input.Select>
          </Input.Label>

          {/* <Input.Label isRequired name="Validade" className="grid-in-validate">
            <Input.Field placeholder="data de validade" />
          </Input.Label> */}

          <Input.Label isRequired name="Imagem" className="grid-in-image">
            <Input.Upload
              {...register('image')}
              error={!!errors.image?.message}
            />
          </Input.Label>

          <Input.Label
            isRequired
            name="Descrição"
            className="grid-in-description"
          >
            <Input.TextArea
              {...register('description')}
              className="min-h-44"
              placeholder="Descreva um pouco sobre o produto"
              error={!!errors.description?.message}
            />
          </Input.Label>

          <div className="grid-in-button flex  gap-3">
            <Link href="/products" variants="secondary">
              Cancelar
            </Link>
            <Button type="submit">Cadastrar produto </Button>
          </div>
        </form>
      </section>

      <section className="border-l border-gray-200 px-8 pt-8">
        <span className="text-gray-400 font-medium">Preview do Produto</span>

        <div className="w-full h-60 bg-gray-100 rounded-xl mt-8"></div>

        <div className="mt-8 grid grid-cols-[10rem_10rem] gap-y-6 justify-between">
          <div>
            <span className="font-medium text-gray-400">Nome</span>
            {getValues('name')?.length <= 0 && (
              <span className="block rounded w-full bg-gray-100 h-4"></span>
            )}
            {getValues('name')?.length > 0 && (
              <span className="block w-full text-gray-600 whitespace-nowrap overflow-ellipsis overflow-hidden ">
                {getValues('name')}
              </span>
            )}
          </div>

          <div>
            <span className="font-medium text-gray-400">Valor</span>
            <span className="block rounded w-full bg-gray-100 h-4"></span>
          </div>

          <div>
            <span className="font-medium text-gray-400">Unidade</span>
            <span className="block rounded w-full bg-gray-100 h-4"></span>
          </div>

          <div>
            <span className="font-medium text-gray-400">Quantidade</span>
            <span className="block rounded w-full bg-gray-100 h-4"></span>
          </div>

          <div className="col-start-1 col-end-3">
            <span className="font-medium text-gray-400">Descrição</span>
            <div className="flex flex-col gap-1">
              <span className="block rounded w-full bg-gray-100 h-4"></span>
              <span className="block rounded w-full bg-gray-100 h-4"></span>
              <span className="block rounded w-full bg-gray-100 h-4"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
