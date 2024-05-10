'use client'

import Link from 'next/link'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { fetchHttpClient } from '@/infra/providers/impls/httpClient/fetchHttpClient'
import { SellerMainGateway } from '@/services'

import { useRegister } from './useRegister'
export default function RegisterPage() {
  const sellerMainGateway = new SellerMainGateway(fetchHttpClient)
  const {
    errors,
    register,
    handleSubmit,
    onSubmit,
    maskCNPJ,
    isPending,
    isValid,
  } = useRegister({
    sellerGateway: sellerMainGateway,
  })
  return (
    <>
      <header className="mt-6 flex justify-between"></header>

      <div className="px-8  max-sm:px-2 max-md:px-4 mt-12">
        <div className="max-w-80 ">
          <h1 className="text-[2rem] text-gray-600 font-medium">
            Cadastre seu estabelecimento
          </h1>
          <p className=" text-gray-400 ">
            Gerencie sua loja de forma fácil e rápida
          </p>
        </div>
        <form
          onSubmit={handleSubmit(({ cnpj, email, password }) => {
            onSubmit({ cnpj, email, password })
          })}
          className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6"
        >
          <Input.Label name="CNPJ">
            <Input.Field
              placeholder="000.000.000-00"
              maxLength={14}
              {...register('cnpj', {
                onChange: (el) => (el.target.value = maskCNPJ(el.target.value)),
              })}
              error={!!errors.cnpj?.message}
            />
            <Input.Message message={errors.cnpj?.message} />
          </Input.Label>
          <Input.Label name="Email">
            <Input.Field
              placeholder="email@exemple.com"
              type="email"
              {...register('email')}
              error={!!errors.email?.message}
            />
            <Input.Message message={errors.email?.message} />
          </Input.Label>
          <Input.Label name="Senha">
            <Input.Field
              placeholder="••••••••••••••••"
              type="password"
              {...register('password')}
              error={!!errors.password?.message}
            />
            <Input.Message message={errors.password?.message} />
          </Input.Label>
          <Button isLoading={isPending} disable={!isValid || isPending}>
            Cadastra-se
          </Button>
        </form>

        <span className="mt-10 pb-10 block w-full text-center text-gray-500 font-medium">
          já possui uma conta?
          <Link href="/auth/signin" className="text-emerald-600">
            {' '}
            entrar
          </Link>
        </span>
      </div>
    </>
  )
}
