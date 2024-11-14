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
import { maskCNPJ } from '@/utils/maskCnpj'

import { useAccountFormModel } from './account-form.model'

export function AccountForm() {
  const { form } = useAccountFormModel()

  return (
    <section>
      <h3 className="text-2xl text-gray-600">Conta</h3>
      <Form {...form}>
        <form className="flex flex-col gap-10 w-full mt-12">
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem className="flex justify-between w-full">
                <div>
                  <FormLabel>CNPJ</FormLabel>
                  <p>Defina uma nome para seu estabelecimento.</p>
                </div>
                <FormControl>
                  <Input
                    placeholder="000.000.000-00"
                    maxLength={15}
                    autoComplete="username"
                    {...field}
                    className="max-w-[555px]"
                    onChange={(el) => {
                      el.target.value = maskCNPJ(el.target.value)
                      field.onChange(el)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex justify-between w-full">
                <div>
                  <FormLabel>Email</FormLabel>
                  <p>Defina uma nome para seu estabelecimento.</p>
                </div>
                <FormControl>
                  <Input
                    placeholder="000.000.000-00"
                    maxLength={15}
                    autoComplete="username"
                    {...field}
                    className="max-w-[555px]"
                    onChange={(el) => {
                      el.target.value = maskCNPJ(el.target.value)
                      field.onChange(el)
                    }}
                  />
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
