import { Button } from '@/components/UI/Button'
import { Input } from '@/components/UI/Input'

export default function ConfigPage() {
  return (
    <>
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">
              Configuração
            </h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplaca
            </p>
          </div>
        </div>
      </header>

      <div className="p-8 ">
        <section>
          <h3 className="text-2xl text-gray-600">Conta</h3>
          <form className="flex flex-col gap-10 mt-12">
            <Input.Label
              name="Email"
              description="Defina uma nome para seu estabelecimento. "
              className="flex-row justify-between w-full [&>span]:text-gray-600 [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="email"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
            <Input.Label
              name="CNPJ"
              description="Defina uma nome para seu estabelecimento. "
              className="flex-row justify-between w-full [&>span]:text-gray-600 [&>div:nth-child(2)]:max-w-[555px]"
            >
              <Input.Field
                placeholder="000.000.000.000-00"
                className="max-w-[555px]"
              ></Input.Field>
            </Input.Label>
          </form>
        </section>

        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <section>
          <h3 className="text-2xl text-gray-600">Senha</h3>
          <div className="flex justify-between mt-12">
            <div className="max-w-[420px]">
              <h4 className="text-gray-600">Defina uma nova senha</h4>
              <p className="text-gray-400 text-sm mt-2 mb-6">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <form className="w-full flex flex-col gap-4 max-w-[555px]">
              <Input.Label name="Senha atual">
                <Input.Field placeholder="••••••••••••"></Input.Field>
              </Input.Label>
              <Input.Label name="Nova senha">
                <Input.Field placeholder="••••••••••••"></Input.Field>
              </Input.Label>
            </form>
          </div>
        </section>
        <div className="w-full h-[1px] bg-gray-200 my-10"></div>

        <section>
          <h3 className="text-2xl text-rose-600">Zona de perigo</h3>

          <div className="flex items-center justify-between mt-8">
            <div className="max-w-[420px]">
              <h4 className="text-gray-600">Desativar estabelecimento</h4>
              <p className="text-gray-400 text-sm mt-2 mb-6">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <form className="w-full flex flex-col gap-4 max-w-[555px]">
              <Button action="dangerous" variants="secondary">
                Desativar estabelecimento
              </Button>
            </form>
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-8"></div>

          <div className="flex  items-center justify-between">
            <div className="max-w-[420px]">
              <h4 className="text-gray-600">Deletar estabelecimento</h4>
              <p className="text-gray-400 text-sm mt-2 mb-6">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <form className="w-full flex flex-col gap-4 max-w-[555px]">
              <Button action="dangerous" variants="secondary">
                Deletar estabelecimento
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
