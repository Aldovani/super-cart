import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'

import { SignInForm } from './components/sign-in-form'

export default function SignInPage() {
  return (
    <>
      <div className="px-8 pt-10  max-sm:px-2 max-md:px-4  flex flex-col justify-between h-full">
        <Logo />
        <div>
          <div>
            <h1 className="text-3xl leading-10  text-gray-600 font-semibold mb-1">
              Bem vindo de volta
            </h1>
            <p className=" text-gray-400  max-w-[320px]">
              Entre em sua conta para continuar utilizando o
              <span className="text-emerald-600 font-bold"> Super Cart</span>
            </p>
          </div>

          <SignInForm />

          <span className="mt-10 pb-10 block w-full text-start text-gray-500 font-medium">
            Não possui uma conta?
            <Link href="/auth/register" className="text-emerald-600">
              {' '}
              cadastra-se
            </Link>
          </span>
        </div>
        <footer></footer>
      </div>
    </>
  )
}
