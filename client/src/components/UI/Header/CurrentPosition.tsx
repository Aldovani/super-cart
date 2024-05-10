'use client'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'

export function CurrentPosition() {
  return (
    <Modal name="CurrentPosition">
      <Modal.Trigger>
        <button className="group flex gap-2 items-center justify-center whitespace-nowrap text-gray-400 hover:text-emerald-600">
          <MapPin size={24} className="text-emerald-600" />
          Informe seu{' '}
          <span className="text-gray-500  group-hover:text-emerald-600">
            CEP
          </span>
        </button>
      </Modal.Trigger>
      <Modal.Container>
        <Modal.Body className="w-[34.125rem] h-[26.5rem] flex flex-col items-center">
          <Image alt="" width={100} height={100} src="/current_position.svg" />
          <div className="mt-4 mb-8">
            <h2 className="mx-auto max-w-96 text-xl text-center font-medium text-gray-500">
              Poderia nos dizer sua localização para melhorar sua experiência?
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Informe um CEP para visualizar estabelecimentos próximos de você{' '}
            </p>
          </div>
          <form className="w-full">
            <Input.Label name="CEP" className="w-full">
              <Input.Field placeholder="0000000-00" />
            </Input.Label>
            <Button className="mt-4">Buscar</Button>
          </form>
        </Modal.Body>
      </Modal.Container>
    </Modal>
  )
}
