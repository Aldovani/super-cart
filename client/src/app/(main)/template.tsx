import { Footer } from '@/components/UI/Footer'
import { Header } from '@/components/UI/Header'

type MainTemplateProps = {
  children: React.ReactNode
}
export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
