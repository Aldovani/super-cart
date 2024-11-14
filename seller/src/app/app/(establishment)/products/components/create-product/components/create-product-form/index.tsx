'use client'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import MultipleSelector from '@/components/ui/multiple-selector'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SheetClose } from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'

import { useCreateProductModel } from './use-create-product'

type CreateProductForm = {
  onClose: (value: boolean) => void
}

export function CreateProductForm({ onClose }: CreateProductForm) {
  const { form, handleCreateProduct, categories, loadingMutation } =
    useCreateProductModel({
      onClose,
    })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateProduct)}
        className="gap-y-4 gap-x-4 mt-8 grid grid-cols-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-start-1 col-end-3">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="costPrice"
          render={({ field }) => (
            <FormItem className="col-start-1 col-end-2">
              <FormLabel>Valor de custo</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salesPrice"
          render={({ field }) => (
            <FormItem className="col-start-2 col-end-3">
              <FormLabel>Valor de venda</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="col-start-1 col-end-2">
              <FormLabel>Categorias</FormLabel>
              <FormControl>
                <MultipleSelector
                  inputProps={{ ...field }}
                  className="max-w-[1fr]"
                  onChange={(e) =>
                    field.onChange(e.map((category) => category.value))
                  }
                  options={categories}
                  hidePlaceholderWhenSelected
                  hideClearAllButton
                  placeholder="Selecione a categorias..."
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="col-start-2 col-end-3">
              <FormLabel>Unidade</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um tipo de unidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Kilogram">Kilograma</SelectItem>
                  <SelectItem value="Gram">Grama</SelectItem>
                  <SelectItem value="Liter">Litro</SelectItem>
                  <SelectItem value="Milliliter">Mililitro</SelectItem>
                  <SelectItem value="Piece">Pedaço</SelectItem>
                  <SelectItem value="Box">Caixa</SelectItem>
                  <SelectItem value="Pack">Pacote</SelectItem>
                  <SelectItem value="Dozen">Duzia</SelectItem>
                  <SelectItem value="Meter">Metro</SelectItem>
                  <SelectItem value="Centimeter">Centímetro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem className="col-start-1 col-end-3">
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-start-1 col-end-3">
              <FormLabel>Descrição</FormLabel>
              <Textarea {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-start-1 col-end-3 flex  gap-3">
          <SheetClose asChild>
            <Button type="submit" className="w-full" variant="secondary">
              Cancelar
            </Button>
          </SheetClose>
          <Button disabled={loadingMutation} type="submit" className="w-full">
            Cadastrar produto
          </Button>
        </div>
      </form>
    </Form>
  )
}
