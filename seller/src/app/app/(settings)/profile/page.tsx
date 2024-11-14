import { AddressForm } from './components/address-form'
import { ContactsForm } from './components/contacts-form'
import { ProfileForm } from './components/profile-form'

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

        <ProfileForm />

        <hr className="w-full h-[1px] bg-gray-200 my-10" />

        <AddressForm />

        <hr className="w-full h-[1px] bg-gray-200 my-10" />

        <ContactsForm />
      </div>
    </>
  )
}
