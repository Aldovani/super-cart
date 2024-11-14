'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useSignInModel } from './use-sign-in.model'
export function SignInForm() {
  const { form, handleSignIn, maskCNPJ, loading } = useSignInModel()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignIn)}
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
                  maxLength={15}
                  autoComplete="username"
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••••••••••"
                  {...field}
                  autoComplete="current-password"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between items-center">
          <div className="items-center justify-center inline-flex gap-x-2 cursor-pointer">
            <Checkbox id="remember" />
            <FormLabel htmlFor="remember" className="!mt-0">
              Salvar senha
            </FormLabel>
          </div>
          <div>
            <span className="font-medium text-gray-400">
              esqueceu a senha ?
              <Link href="/" className="text-emerald-600">
                redefinir senha
              </Link>
            </span>
          </div>
        </div>
        {loading && (
          <Button disabled>
            <Loader2 className="animate-spin" />
            Carregando
          </Button>
        )}
        {!loading && (
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        )}
      </form>
    </Form>
  )
}
