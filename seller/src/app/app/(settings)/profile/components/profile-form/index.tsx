'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { useProfileFormModel } from './profile-form.model'

export function ProfileForm() {
  const { form } = useProfileFormModel()

  return (
    <section>
      <h2></h2>
      <p></p>

      <Form {...form}>
        <form className="flex flex-col gap-8 w-full ">
          <FormField
            control={form.control}
            name="corporateName"
            render={({ field }) => (
              <FormItem className="flex  justify-between ">
                <div>
                  <FormLabel>Nome fantasia</FormLabel>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    Defina uma nome para seu estabelecimento.{' '}
                  </p>
                </div>
                <FormControl>
                  <Input {...field} className="max-w-[550px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tradeName"
            render={({ field }) => (
              <FormItem className="flex  justify-between ">
                <div>
                  <FormLabel>Razão social</FormLabel>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    Defina uma nome para seu estabelecimento.{' '}
                  </p>
                </div>
                <FormControl>
                  <Input {...field} className="max-w-[550px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex  justify-between ">
                <div>
                  <FormLabel>Categoria</FormLabel>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    Defina categoria para seu estabelecimento.{' '}
                  </p>
                </div>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl className="max-w-[550px]">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
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
            name="minDeliveryValue"
            render={({ field }) => (
              <FormItem className="flex  justify-between ">
                <div>
                  <FormLabel>Valor mínimo</FormLabel>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    nos informe qual o valor mínimo para o estabelecimento
                    realizar entrega.
                  </p>
                </div>
                <FormControl>
                  <Input {...field} className="max-w-[550px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="minDeliveryValue"
            render={({ field }) => (
              <FormItem className="flex  justify-between ">
                <div>
                  <FormLabel>Descrição</FormLabel>
                  <p className="text-gray-400 text-sm mt-2 mb-6">
                    Faça uma preve descrição do seu estabelecimento para que os
                    cliente possam tem encontra.{' '}
                  </p>
                </div>
                <FormControl>
                  <Textarea {...field} className="max-w-[550px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  )
}
