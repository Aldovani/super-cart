import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 ">
      <div className="max-w-80% mx-auto flex align-top justify-between pt-10 pb-8">
        <div className="max-w-80">
          <Logo />
          <p className="text-gray-400 text-sm mt-2 mb-6">
            Se suas finanças estão indo ladeira abaixo, lembre-se: dinheiro não
            cresce em árvores, mas se você plantar boletos, pode colher dívidas!
          </p>
          <nav className="flex items-center gap-8">
            <a
              href=""
              className="text-gray-400 hover:text-emerald-600"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              href=""
              target="_blank"
              className="text-gray-400 hover:text-emerald-600"
            >
              <Facebook />
            </a>
            <a
              href=""
              target="_blank"
              className="text-gray-400 hover:text-emerald-600"
            >
              <Instagram />
            </a>
          </nav>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <nav>
            <span className="text-gray-900 font-medium">Empresa</span>
            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <Link href="" className="text-gray-400 hover:text-emerald-600">
                  Sobre nos
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400 hover:text-emerald-600">
                  Serviços{' '}
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  Comunidade
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  Missão
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <span className="text-gray-900 font-medium">Suporte</span>
            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  Centra de ajuda
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <span className="text-gray-900 font-medium">Links</span>
            <ul className="flex flex-col gap-2 mt-3">
              <li>
                <Link
                  href="/auth/signin"
                  className="text-gray-400  hover:text-emerald-600"
                >
                  Cadastra-se
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400  hover:text-emerald-600">
                  Mercado
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-400 hover:text-emerald-600">
                  Serviços
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 pb-5">
        <div className="max-w-80% mx-auto flex align-top justify-between">
          <span className="text-gray-400 ">
            © 2024 Super Cart. Todos os direitos reservados.
          </span>
          <div className="flex gap-16 items-center">
            <Link href="" className="text-gray-400 hover:text-emerald-600">
              Politica de privacidade
            </Link>
            <Link href="" className="text-gray-400 hover:text-emerald-600">
              Termo e condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
