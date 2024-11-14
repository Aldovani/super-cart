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

import { useAddressFormModel } from './address-form.model'

export function AddressForm() {
  const { form } = useAddressFormModel()
  return (
    <section>
      <h3 className="text-2xl text-gray-600">Endereço</h3>
      <div className="flex justify-between mt-12">
        <div className="max-w-[420px] ">
          <h4 className="text-gray-600">Localização</h4>
          <p className="text-gray-400 text-sm mt-2 mb-6">
            faça uma preve descrição do seu estabelecimento para que os cliente
            possam tem encontra.
          </p>
        </div>

        <Form {...form}>
          <form className="flex flex-col gap-6 w-full max-w-[550px]">
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between ">
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between ">
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between ">
                  <FormLabel>Estado</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel>Rua/Avenida</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  )
}
