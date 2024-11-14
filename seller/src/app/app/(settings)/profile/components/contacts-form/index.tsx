'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useContactsFormModel } from './contacts-form.model'

export function ContactsForm() {
  const { form } = useContactsFormModel()
  return (
    <section>
      <h3 className="text-2xl text-gray-600">Contatos</h3>
      <div className="flex justify-between mt-12">
        <div className="max-w-[420px]">
          <h4 className="text-gray-600">Contato</h4>
          <p className="text-gray-400 text-sm mt-2 mb-6">
            faça uma preve descrição do seu estabelecimento para que os cliente
            possam tem encontra.
          </p>
          <Button variant="secondary">Adicionar novo contato</Button>
        </div>
        <Form {...form}>
          <form className="flex flex-col gap-6 w-full max-w-[550px]">
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between ">
                  <FormLabel>Numero de telefone</FormLabel>
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
