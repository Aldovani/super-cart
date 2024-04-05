import { Logo } from "@/components/UI/Logo";

type AuthLayoutProps = {
  children: React.ReactElement;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid grid-cols-[1fr_45%] h-full max-lg:grid-cols-1">
      <div className="bg-auth-layout  bg-emerald-600 pl-32  pt-8  max-lg:hidden">
        <div className="flex flex-col justify-end gap-2 max-w-lg">
          <Logo />

          <h2 className="mt-10 text-gray-50 text-[2rem] font-bold leading-[120%] max-w-[410px]">
            Tudo o que você precisa para começar a vender em um só local{" "}
          </h2>
          <p className="text-gray-50 mt-3">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit.libero et
            velit interdum, ac aliquet
          </p>
        </div>
      </div>

      <section className="w-4/5 max-sm:max-w-full max-sm:w-full max-sm:px-8 max-w-3xl mx-auto">
        {children}
      </section>
    </main>
  );
}
