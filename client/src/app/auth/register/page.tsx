'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import Google from '@/components/Logos/Google'
import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'
import { Logo } from '@/components/UI/Logo'

import { useRegister } from './useRegister'

export default function RegisterPage() {
  const {
    errors,
    register,
    handleSubmit,
    handleChangeCPF,
    handleChangeCellphone,
  } = useRegister()
  return (
    <>
      <header className="mt-6 flex justify-between">
        <Logo />
        <Link href="/" className="flex items-center gap-1 text-emerald-600">
          <ArrowLeft size={16} className="text-emerald-900" />
          voltar
        </Link>
      </header>

      <div className="px-8 mt-12">
        <div className="max-w-80">
          <h1 className="text-[2rem] text-gray-600 font-medium">Cadastra-se</h1>
          <p className=" text-gray-400 ">
            Cadastre-se para ter acesso a diversas funcionalidades do
            <span className="text-emerald-600 font-bold"> Super Cart</span>
          </p>
        </div>
        <form
          onSubmit={handleSubmit((user) => {
            console.log({ ...user })
          })}
          className="mt-10 grid grid-areas-form-sing-in gap-y-4 gap-x-6"
        >
          <Input.Label name="Nome" className="grid-in-name">
            <Input.Field
              placeholder="Nome completo"
              {...register('name')}
              error={!!errors.name?.message}
            />
          </Input.Label>
          <Input.Label name="CPF" className="grid-in-CPF">
            <Input.Field
              placeholder="000.000.000-00"
              maxLength={14}
              {...register('cpf', {
                onChange: (el) => handleChangeCPF(el.target.value),
              })}
              error={!!errors.cpf?.message}
            />
          </Input.Label>
          <Input.Label name="Email" className="grid-in-email">
            <Input.Field
              placeholder="email@exemple.com"
              {...register('email')}
              error={!!errors.email?.message}
            />
          </Input.Label>
          <Input.Label name="Telefone" className="grid-in-phone">
            <Input.Field
              maxLength={15}
              placeholder="(99) 99999-9999"
              {...register('cellphone', {
                onChange: (el) => handleChangeCellphone(el.target.value),
              })}
              error={!!errors.cellphone?.message}
            />
          </Input.Label>
          <Input.Label name="Senha" className="grid-in-password">
            <Input.Field
              placeholder="••••••••••••••••"
              {...register('password')}
              error={!!errors.password?.message}
            />
          </Input.Label>
          <Button className="grid-in-button">Cadastra-se</Button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <span className="flex-1 h-[1px] block  bg-gray-200"></span>
          <span className="text-gray-400">Cadastre com</span>
          <span className="flex-1 h-[1px] block bg-gray-200"></span>
        </div>

        <Button variants="secondary" className="gap-2">
          <Google />
          Cadastrar com o Google
        </Button>

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
