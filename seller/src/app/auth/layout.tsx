type AuthLayoutProps = {
  children: React.ReactElement
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid grid-cols-[.6fr_1fr] h-full max-lg:grid-cols-1">
      <section className="w-4/5 max-sm:max-w-full max-sm:w-full max-sm:px-8 max-w-3xl mx-auto">
        {children}
      </section>
      <div className="h-full flex flex-col gap-10 bg-emerald-600 pl-16  pt-10  max-lg:hidden">
        <div className="flex flex-col justify-end gap-2 max-w-lg">
          <h2 className=" text-gray-50 text-[2rem] font-bold leading-[120%] max-w-[410px]">
            Tudo o que você precisa para começar a vender em um só local{' '}
          </h2>
          <p className="text-gray-50 mt-3">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit.libero et
            velit interdum, ac aliquet
          </p>
        </div>
      </div>
    </main>
  )
}
