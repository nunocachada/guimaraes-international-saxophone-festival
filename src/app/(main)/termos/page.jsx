import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage'

export const metadata = {
  title: 'Termos e Condições',
  description:
    'Termos e Condições de participação no Guimarães International Saxophone Festival 2026.',
}

export default function Termos() {
  return (
    <div className="relative bg-[#1a0f1a] py-20 sm:py-32">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="font-syne text-4xl font-bold tracking-tight text-neutral-200 uppercase sm:text-5xl lg:text-6xl">
              Termos e Condições
            </h1>
            <p className="mt-6 font-mono text-sm text-neutral-400">
              Última atualização: 14 de janeiro de 2026
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {/* Secção 1 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                1. Identificação da Entidade
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  O{' '}
                  <strong className="text-neutral-200">
                    Guimarães International Saxophone Festival
                  </strong>{' '}
                  é organizado pela:
                </p>
                <dl className="mt-4 space-y-2">
                  <div className="flex flex-col gap-2 border-b border-[#5C3A5C]/20 pb-2 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-[#A87B3F]">Entidade</dt>
                    <dd className="text-neutral-200 sm:text-right">
                      Sociedade Musical de Guimarães
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-[#5C3A5C]/20 pb-2 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-[#A87B3F]">NIF</dt>
                    <dd className="text-neutral-200 sm:text-right">
                      501 631 542
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-[#5C3A5C]/20 pb-2 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-[#A87B3F]">Morada</dt>
                    <dd className="break-words text-neutral-200 sm:text-right">
                      Rua de Vila Flor – Portaria Teatro Jordão, 4810-255
                      Guimarães
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 border-b border-[#5C3A5C]/20 pb-2 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-[#A87B3F]">Telefone</dt>
                    <dd className="text-neutral-200 sm:text-right">
                      <a
                        href="tel:+351253517049"
                        className="transition-colors hover:text-[#A87B3F]"
                      >
                        +351 253 517 049
                      </a>
                    </dd>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <dt className="text-sm text-[#A87B3F]">Email</dt>
                    <dd className="break-all text-neutral-200 sm:text-right sm:break-normal">
                      <a
                        href="mailto:geral@smguimaraes.pt"
                        className="transition-colors hover:text-[#A87B3F]"
                      >
                        geral@smguimaraes.pt
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Secção 2 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                2. Objeto
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  Os presentes Termos e Condições regulam a participação no
                  Guimarães International Saxophone Festival 2026 (7 a 10 de
                  julho), incluindo:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>
                    Masterclasses de saxofone com professores internacionais
                  </li>
                  <li>
                    Participação nas orquestras (All Sax, Be_Sax, Stars of the
                    Future)
                  </li>
                  <li>Concertos e apresentações públicas</li>
                  <li>Atividades complementares do evento</li>
                </ul>
              </div>
            </section>

            {/* Secção 3 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                3. Inscrição
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  A inscrição é efetuada exclusivamente através do formulário
                  online disponível neste website.
                </p>
                <p>A inscrição considera-se válida após:</p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>
                    Preenchimento completo e correto do formulário de inscrição
                  </li>
                  <li>Aceitação expressa dos presentes Termos e Condições</li>
                  <li>Aceitação da Política de Privacidade</li>
                  <li>Pagamento integral do valor da inscrição</li>
                  <li>Confirmação por email da organização</li>
                </ul>
              </div>
            </section>

            {/* Secção 4 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                4. Preços e Pagamento
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>Os preços em vigor para a edição 2026 são:</p>
                <div className="mt-6 overflow-x-auto rounded-lg border border-[#5C3A5C]/30">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#5C3A5C]/40 bg-[#1a0f1a]/50">
                        <th className="px-2 pt-4 pb-3 text-left text-sm font-semibold text-[#A87B3F] sm:px-4 sm:text-base">
                          Modalidade
                        </th>
                        <th className="px-2 pt-4 pb-3 text-right text-sm font-semibold text-[#A87B3F] sm:px-4 sm:text-base">
                          Preço
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-200">
                      <tr className="border-b border-[#5C3A5C]/20">
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Aula Individual (50 min)
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          50€
                        </td>
                      </tr>
                      <tr className="border-b border-[#5C3A5C]/20">
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Pack 2 Aulas
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          75€
                        </td>
                      </tr>
                      <tr className="border-b border-[#5C3A5C]/20">
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Pack 3 Aulas
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          135€
                        </td>
                      </tr>
                      <tr className="border-b border-[#5C3A5C]/20">
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Orquestra ALL SAX
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          40€
                        </td>
                      </tr>
                      <tr className="border-b border-[#5C3A5C]/20">
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Orquestra BE_SAX
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          35€
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                          Stars of the Future
                        </td>
                        <td className="px-2 py-3 text-right text-sm font-semibold sm:px-4 sm:text-base">
                          35€
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 rounded-lg border border-[#5C3A5C]/30 bg-[#1a0f1a]/30 p-4 sm:p-6">
                  <p className="mb-4 font-semibold text-neutral-200">
                    O pagamento deve ser efetuado por transferência bancária:
                  </p>
                  <dl className="space-y-3">
                    <div className="flex flex-col gap-2 border-b border-[#5C3A5C]/30 pb-3 sm:flex-row sm:justify-between">
                      <dt className="text-sm font-semibold text-[#A87B3F]">
                        IBAN
                      </dt>
                      <dd className="font-mono text-base font-semibold break-all text-neutral-200 sm:text-right sm:break-normal">
                        PT50 0035 0271 0000 8409 6307 2
                      </dd>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                      <dt className="text-sm font-semibold text-[#A87B3F]">
                        Email para comprovativo
                      </dt>
                      <dd className="break-all text-neutral-200 sm:text-right sm:break-normal">
                        <a
                          href="mailto:tesouraria@smguimaraes.pt"
                          className="font-semibold transition-colors hover:text-[#A87B3F]"
                        >
                          tesouraria@smguimaraes.pt
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-sm text-neutral-400">
                    O comprovativo de pagamento deve ser enviado juntamente com
                    a referência indicada no email de confirmação da inscrição.
                  </p>
                </div>
              </div>
            </section>

            {/* Secção 5 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                5. Cancelamento e Reembolso
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  <strong className="text-neutral-200">
                    Política de cancelamento por parte do participante:
                  </strong>
                </p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>
                    <strong className="text-neutral-200">
                      Até 30 dias antes do evento:
                    </strong>{' '}
                    Reembolso de 80% do valor pago
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Entre 30 e 15 dias antes:
                    </strong>{' '}
                    Reembolso de 50% do valor pago
                  </li>
                  <li>
                    <strong className="text-neutral-200">
                      Menos de 15 dias antes:
                    </strong>{' '}
                    Sem direito a reembolso
                  </li>
                </ul>
                <p className="mt-4">
                  Em caso de cancelamento do evento por parte da organização,
                  será efetuado reembolso integral de todos os valores pagos.
                </p>
              </div>
            </section>

            {/* Secção 6 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                6. Responsabilidades
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>Os participantes são responsáveis por:</p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>O seu próprio instrumento musical e acessórios</li>
                  <li>Material escolar e partituras necessárias</li>
                  <li>Bens pessoais durante todo o evento</li>
                </ul>
                <p className="mt-4">
                  A organização não se responsabiliza por perdas, danos, furtos
                  ou extravios de bens pessoais.
                </p>
                <p className="mt-4">
                  <strong className="text-neutral-200">
                    Participantes menores de 18 anos
                  </strong>{' '}
                  devem estar acompanhados por um responsável legal durante todo
                  o evento.
                </p>
              </div>
            </section>

            {/* Secção 7 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                7. Direitos de Imagem
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>Ao aceitar os presentes termos, o participante autoriza:</p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>A captação de fotografias e vídeos durante o evento</li>
                  <li>
                    A utilização destas imagens para fins promocionais e
                    divulgação do festival
                  </li>
                  <li>A publicação nas redes sociais e website do evento</li>
                </ul>
                <p className="mt-4">
                  Caso não pretenda autorizar a utilização da sua imagem, deve
                  comunicar por escrito antes do evento.
                </p>
              </div>
            </section>

            {/* Secção 8 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                8. Proteção de Dados
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  Os dados pessoais recolhidos através da inscrição serão
                  tratados de acordo com:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>O Regulamento Geral de Proteção de Dados (RGPD)</li>
                  <li>A Lei n.º 58/2019 (Lei de Proteção de Dados Pessoais)</li>
                  <li>
                    A nossa{' '}
                    <a
                      href="https://www.guimaraessaxfest.com/masterclass/privacidade.php"
                      className="text-[#A87B3F] underline transition-colors hover:text-[#B8860B]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de Privacidade
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Secção 9 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                9. Alterações ao Programa
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>A organização reserva-se o direito de alterar:</p>
                <ul className="ml-6 list-disc space-y-2 text-neutral-300">
                  <li>O programa e horários do evento</li>
                  <li>Os professores convidados</li>
                  <li>Os locais das atividades</li>
                </ul>
                <p className="mt-4">
                  Estas alterações podem ocorrer por motivos de força maior,
                  procurando sempre manter ou melhorar a qualidade do evento.
                </p>
              </div>
            </section>

            {/* Secção 10 */}
            <section className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10">
              <h2 className="font-syne text-2xl font-semibold tracking-tight text-[#A87B3F] sm:text-3xl">
                10. Lei Aplicável e Foro
              </h2>
              <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
                <p>
                  Os presentes Termos e Condições são regidos pela lei
                  portuguesa.
                </p>
                <p>
                  Para resolução de qualquer litígio emergente destes termos
                  será competente o foro da comarca de Guimarães, com expressa
                  renúncia a qualquer outro.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
