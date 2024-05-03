import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'

export default function ProfilePage() {
  return (
    <>
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">Perfil</h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplaca
            </p>
          </div>
        </div>
      </header>

      <div className="p-8 ">
        <section className="relative">
          <div className="w-full border border-gray-200 rounded-xl h-36 "></div>
          <div className="size-32 flex items-center justify-center  border border-gray-200 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 bg-white">
            <span className="text-gray-400 font-medium">Sua logo</span>
          </div>
        </section>

        <section>
          <form className="flex flex-col gap-10 mt-20">
            <Input.Label
              name="Nome fantasia"
              description="Defina uma nome para seu estabelecimento. "
              className="flex-row justify-between w-full [&>span]:text-gray-600 [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Nome do estabelecimento "
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Razão social"
              description="Defina uma nome para seu estabelecimento. "
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Nome a razão social "
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Categoria"
              description="defina categoria para seu estabelecimento."
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Selecione uma categoria"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Valor mínimo"
              description="nos informe qual o valor mínimo para o estabelecimento realizar entrega."
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px] [&>div_p]:max-w-[420px] "
            >
              <Input.Field
                placeholder="R$ 150,00"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Descrição"
              description="faça uma preve descrição do seu estabelecimento para que os cliente possam tem encontra."
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px] [&>div_p]:max-w-[420px]"
            >
              <Input.TextArea
                placeholder="Descrição"
                className="max-w-[555px] h-32"
              ></Input.TextArea>
            </Input.Label>
          </form>
        </section>

        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <section>
          <h3 className="text-2xl text-gray-600">Endereço</h3>
          <form className="flex flex-col gap-10 mt-12">
            <Input.Label
              name="CEP"
              className="flex-row justify-between w-full [&>span]:text-gray-600 [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Estado"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Cidade"
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Nome a razão social "
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Rua/Avenida"
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="Selecione uma categoria"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="Bairro"
              className="flex-row justify-between w-full [&>div:nth-child(2)]:max-w-[555px] [&>div_p]:max-w-[420px] "
            >
              <Input.Field
                placeholder="R$ 150,00"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
          </form>
        </section>

        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <section>
          <h3 className="text-2xl text-gray-600">Contatos</h3>
          <div className="flex justify-between mt-12">
            <div className="max-w-[420px]">
              <h4 className="text-gray-600">Contato</h4>
              <p className="text-gray-400 text-sm mt-2 mb-6">
                faça uma preve descrição do seu estabelecimento para que os
                cliente possam tem encontra.
              </p>
              <Button variants="secondary">Adicionar novo contato</Button>
            </div>
            <form className="w-full max-w-[555px]">
              <Input.Label name="Contato 1">
                <Input.Field placeholder="(99) 99999-9999 "></Input.Field>
              </Input.Label>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
