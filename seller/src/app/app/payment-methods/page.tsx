import { CreditCard } from 'lucide-react'

export default function PaymentMethodsListPage() {
  return (
    <>
      <header className="px-8  mt-10 ">
        <div className="border-b pb-6 border-gray-200 flex justify-between  items-center   ">
          <div>
            <h2 className="text-gray-800 font-medium text-[2rem]">
              Forma de pagamento
            </h2>
            <p className="text-gray-400 ">
              Confira todos os produtos registrado no seu marktplace
            </p>
          </div>
        </div>
      </header>
      <section className="px-8 mt-8  ">
        <h3 className="text-xl font-medium text-gray-600">Pagamento no site</h3>
        <div className="grid grid-cols-3 gap-4   max-w-[720px] ">
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="credit card"
            />

            <label
              htmlFor="credit card"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Cartão de Credito</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="debit card"
            />

            <label
              htmlFor="debit card"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Cartão de débito</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="paypal"
            />

            <label
              htmlFor="paypal"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Paypal</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="googleplay"
            />

            <label
              htmlFor="googleplay"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">GooglePlay</strong>
            </label>
          </div>
          <div>
            <input type="checkbox" className="hidden peer" name="" id="pix" />

            <label
              htmlFor="pix"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Pix</strong>
            </label>
          </div>
        </div>
      </section>

      <div className="w-[calc(100%_-_64px)] h-[1px] bg-gray-200 ml-8 my-10 "></div>

      <section className="px-8 mt-8 ">
        <h3 className="text-xl font-medium text-gray-600">Pagamento no site</h3>

        <div className="grid grid-cols-3 gap-4 max-w-[720px]">
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="credit card"
            />

            <label
              htmlFor="credit card"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Cartão de Credito</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="debit card"
            />

            <label
              htmlFor="debit card"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Cartão de débito</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="paypal"
            />

            <label
              htmlFor="paypal"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Paypal</strong>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="hidden peer"
              name=""
              id="googleplay"
            />

            <label
              htmlFor="googleplay"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">GooglePlay</strong>
            </label>
          </div>
          <div>
            <input type="checkbox" className="hidden peer" name="" id="pix" />

            <label
              htmlFor="pix"
              className="border border-gray-200 rounded-lg p-5 flex flex-col gap-2 peer-checked:bg-gray-100 "
            >
              <CreditCard size={24} className="text-gray-400 " />
              <strong className="text-gray-600 ">Pix</strong>
            </label>
          </div>
        </div>
      </section>
    </>
  )
}
