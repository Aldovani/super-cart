'use client'

import Link from 'next/link'

import Google from '@/components/Logos/Google'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Logo } from '@/components/UI/Logo'

import { useSignIn } from './useSignIn'

export default function SignInPage() {
  const { errors, register, handleSubmit } = useSignIn()

  return (
    <>
      <header className="mt-6 flex justify-between">
        <Logo />
      </header>

      <div className="px-8  max-sm:px-2 max-md:px-4 mt-12">
        <div className="max-w-80 ">
          <h1 className="text-[2rem] text-gray-600 font-medium">
            Bem vindo de volta
          </h1>
          <p className=" text-gray-400 ">
            Entre em sua conta para continuar utilizando o
            <span className="text-emerald-600 font-bold"> Super Cart</span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit((user) => {
            console.log({ ...user })
          })}
          className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6"
        >
          <Input.Label name="Email">
            <Input.Field
              placeholder="••••••••••••••••"
              {...register('email')}
              error={!!errors.password?.message}
            />
          </Input.Label>
          <Input.Label name="Senha">
            <Input.Field
              placeholder="••••••••••••••••"
              type="password"
              {...register('password')}
              error={!!errors.password?.message}
            />
          </Input.Label>
          <span className="font-medium text-gray-400">
            esqueceu a senha ?
            <Link href="/auth/reset-password" className="text-emerald-600">
              {' '}
              redefinir senha
            </Link>
          </span>
          <Button>Entrar</Button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <span className="flex-1 h-[1px] block  bg-gray-200"></span>
          <span className="text-gray-400"> ou </span>
          <span className="flex-1 h-[1px] block bg-gray-200"></span>
        </div>

        <Button variants="secondary" className="gap-2">
          <Google />
          Entrar com o Google{' '}
        </Button>

        <span className="mt-10 pb-10 block w-full text-center text-gray-500 font-medium">
          Não possui uma conta?
          <Link href="/auth/register" className="text-emerald-600">
            {' '}
            cadastra-se
          </Link>
        </span>
      </div>
    </>
  )
}
