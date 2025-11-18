import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout showFooter={false}>
      <div className="relative flex h-full items-center py-20 sm:py-36">
        <BackgroundImage className="-top-36 bottom-0" />
        <Container className="relative flex w-full flex-col items-center">
          <p className="font-display text-2xl tracking-tight text-[#5C3A5C]">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-[#5C3A5C] sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-lg tracking-tight text-[#5C3A5C]">
            Desculpe, não conseguimos encontrar a página que procura.
          </p>
          <Button href="/" className="mt-8">
            Voltar ao início
          </Button>
        </Container>
      </div>
    </Layout>
  )
}
