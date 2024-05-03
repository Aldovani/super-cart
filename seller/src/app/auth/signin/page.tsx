'use client'

import Link from 'next/link'

// import { SellerAuthenticate } from '@/api/seller/authenticate'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'

import { useSignIn } from './useSignin'

export default function SignInPage() {
  const {
    errors,
    handleChangeFormatCNPJInput,
    handleSubmit,
    register,
    handleSignIn,
  } = useSignIn()

  return (
    <>
      <header className="mt-6 flex justify-between"></header>

      <div className="px-8  max-sm:px-2 max-md:px-4 mt-12">
        <div className="max-w-80 ">
          <h1 className="text-[2rem] text-gray-600 font-medium">
            Portal dos parceiros
          </h1>
          <p className=" text-gray-400 ">
            Entre em sua conta para continuar utilizando o
            <span className="text-emerald-600 font-bold"> Super Cart</span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(({ cnpj, password }) => {
            handleSignIn({ cnpj, password })
          })}
          className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6"
        >
          <Input.Label name="CNPJ">
            <Input.Field
              placeholder="000.000.000-00"
              maxLength={14}
              {...register('cnpj', {
                onChange: (el) => handleChangeFormatCNPJInput(el.target.value),
              })}
              error={!!errors.cnpj?.message}
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
