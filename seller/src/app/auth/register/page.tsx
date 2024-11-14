import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'

import { RegisterForm } from './components/register-form'

export default async function RegisterPage() {
  return (
    <>
      <div className="px-8 pt-10  max-sm:px-2 max-md:px-4  flex flex-col justify-between h-full">
        <Logo />
        <div>
          <div className="max-w-96 ">
            <h1 className="text-3xl leading-[125%] text-gray-600 font-semibold">
              Cadastre seu estabelecimento
            </h1>
            <p className=" text-gray-400 ">
              Gerencie sua loja de forma fácil e rápida
            </p>
          </div>

          <RegisterForm />

          <div>
            <p className="mt-10 pb-10 block w-full  text-gray-500 font-medium">
              já possui uma conta?
              <Link href="/auth/sign-in" className="text-emerald-600">
                {' '}
                entrar
              </Link>
            </p>
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
