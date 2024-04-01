type AuthLayoutProps = {
  children: React.ReactElement
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid grid-cols-[1fr_45%] h-full max-lg:grid-cols-1">
      <section className="w-4/5 max-w-3xl mx-auto">{children}</section>

      <div className="bg-auth-layout flex bg-cover pl-20 pb-16 max-lg:hidden">
        <div className="flex flex-col justify-end gap-2 max-w-lg">
          <h2 className="text-gray-50 text-[2rem] font-semibold leading-[130%]">
            Aquela <span className="text-emerald-500">oferta</span> que você
            procura está <span className="text-emerald-500">aqui</span>!
          </h2>
          <p className="text-gray-50">
            Encontre a oferta que você procura aqui! As melhores opções estão ao
            seu alcance. Não perca tempo, aproveite agora mesmo
          </p>
        </div>
      </div>
    </main>
  )
}
