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

import { useChangePasswordFormModel } from './change-password-form.model'

export function ChangePasswordForm() {
  const { form } = useChangePasswordFormModel()

  return (
    <section>
      <h3 className="text-2xl text-gray-600">Senha</h3>
      <div className="flex justify-between items-start mt-12">
        <div className="max-w-[420px]">
          <h4 className="text-gray-600">Defina uma nova senha</h4>
          <p className="text-gray-400 text-sm mt-2 mb-6">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <Form {...form}>
          <form className="flex flex-col gap-8 w-full  max-w-[555px]">
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between ">
                  <FormLabel>Senha atual</FormLabel>
                  <FormControl>
                    <Input {...field} className="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel>Nova senha</FormLabel>
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
