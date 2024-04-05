import Link from 'next/link'

import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'

export default function RegisterPage() {
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
        <form className="mt-10 grid grid-cols-1 gap-y-4 gap-x-6">
          <Input.Label name="CNPJ">
            <Input.Field placeholder="000.000.000-00" />
          </Input.Label>
          <Input.Label name="Email">
            <Input.Field placeholder="email@exemple.com" type="password" />
          </Input.Label>
          <Input.Label name="Senha">
            <Input.Field placeholder="••••••••••••••••" type="password" />
          </Input.Label>
          <Button>Cadastra-se</Button>
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
