import Image from 'next/image'

import { Button } from '../Button'

import { Counter } from './Counter'

export function ProductDetail() {
  return (
    <div className="grid grid-cols-2 gap-8 border-b border-gray-200 pb-12 mt-10">
      <div className="bg-gray-100 flex justify-center items-center rounded-xl h-[25rem]">
        <Image src="/feijão nene.png" alt=" " width={260} height={260} />
      </div>
      <div className="flex flex-col justify-between">
        <header>
          <h2 className="text-gray-500 text-2xl">pacote de feijão mene 2k</h2>
          <p className="text-gray-400 mt-2">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="text-sm text-gray-500 mt-3 block">1 unidade</span>
          <h4 className="text-gray-800 font-medium text-[2rem] mt-8">
            R$ 20,00
          </h4>
        </header>

        <div className="flex items-center gap-8 border-t border-gray-200 pt-6">
          <Counter />
          <Button>Adicionar</Button>
        </div>
      </div>
    </div>
  )
}
