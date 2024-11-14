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

import { useRegisterModel } from './use-register.model'

export function RegisterForm() {
  const { maskCNPJ, form, handleRegisterMerchant } = useRegisterModel()

  return (
    // <form
    //   onSubmit={handleSubmit(handleRegisterMerchant)}
    //   className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6"
    // >
    //   <Input.Label name="CNPJ">
    //     <Input.Field
    //       data-testid="input-register-form"
    //       placeholder="000.000.000-00"
    //       maxLength={14}
    //       {...register('cnpj', {
    //         onChange: (el) => (el.target.value = maskCNPJ(el.target.value)),
    //       })}
    //       error={!!errors.cnpj?.message}
    //     />
    //     <Input.Message message={errors.cnpj?.message} />
    //   </Input.Label>
    //   <Input.Label name="Email">
    //     <Input.Field
    //       data-testid="input-register-form"
    //       placeholder=""
    //       type="email"
    //       {...register('email')}
    //       error={!!errors.email?.message}
    //     />
    //     <Input.Message message={errors.email?.message} />
    //   </Input.Label>
    //   <Input.Label name="Senha">
    //     <Input.Field
    //       data-testid="input-register-form"
    //       placeholder="••••••••••••••••"
    //       type="password"
    //       {...register('password')}
    //       error={!!errors.password?.message}
    //     />
    //     <Input.Message message={errors.password?.message} />
    //   </Input.Label>

    // </form>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegisterMerchant)}
        className="space-y-4 mt-8"
      >
        <FormField
          control={form.control}
          name="cnpj"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNPJ</FormLabel>
              <FormControl>
                <Input
                  placeholder="000.000.000-00"
                  maxLength={14}
                  {...field}
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@exemple.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••••••••••"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Cadastra-se
        </Button>
      </form>
    </Form>
  )
}
