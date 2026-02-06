'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion } from 'motion/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { BackgroundImage } from '@/components/BackgroundImage'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from '@/components/ui/animated-modal'
import { Music2, GraduationCap, Presentation, Calendar } from 'lucide-react'
import saxImage from '@/images/sax.svg'
import { days } from '@/data/artistasData'

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}
// Ícones para os eventos (usando lucide-react)
const ConcertIcon = Music2
const MasterclassIcon = GraduationCap
const ConferenceIcon = Presentation
const EventIcon = Calendar

// Componentes para os botões do modal
const FecharButton = () => {
  const { setOpen } = useModal()
  return (
    <button
      onClick={() => setOpen(false)}
      className="w-28 cursor-pointer rounded-md border border-[#1a0f1a]/50 bg-gradient-to-b from-[#1a0f1a]/80 to-[#1a0f1a]/60 px-2 py-1 text-sm text-neutral-200 hover:from-[#1a0f1a] hover:to-[#1a0f1a]/80"
    >
      Fechar
    </button>
  )
}

const ParticiparButton = () => {
  const { setOpen } = useModal()
  const handleClick = () => {
    window.open(
      'https://www.guimaraessaxfest.com/masterclass/',
      '_blank',
      'noopener,noreferrer',
    )
  }
  return (
    <button
      onClick={handleClick}
      className="w-28 cursor-pointer rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900 hover:bg-neutral-100"
    >
      Participar
    </button>
  )
}

const BIO_MAX_LENGTH = 280

// Componente para cada card de artista com modal
const ArtistaCard = ({ artista, artistaIndex, clipPathId }) => {
  const [biografiaExpanded, setBiografiaExpanded] = useState(false)

  if (!artista.biografia && !artista.eventos?.length) {
    return null
  }

  const biografia = artista.biografia ?? ''
  const shouldTruncate = biografia.length > BIO_MAX_LENGTH
  const biografiaText =
    !shouldTruncate || biografiaExpanded
      ? biografia
      : `${biografia.slice(0, BIO_MAX_LENGTH).trim()}...`

  const handleToggleBiografia = () => {
    setBiografiaExpanded((prev) => !prev)
  }

  return (
    <div>
      <Modal>
        <ModalTrigger className="group relative h-70 w-full transform cursor-pointer overflow-hidden rounded-4xl focus:ring-2 focus:ring-sax-gold focus:ring-offset-2 focus:ring-offset-[#2a1f2a] focus:outline-none">
          <div
            className={clsx(
              'absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
              [
                'border-[#5C3A5C]/30',
                'border-[#B8860B]/30',
                'border-[#C85A64]/30',
              ][artistaIndex % 3],
            )}
          />
          <div
            className="absolute inset-0 bg-[#2a1f2a]"
            style={{ clipPath: `url(#${clipPathId}-${artistaIndex % 3})` }}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-300 group-hover:scale-110"
              src={artista.imagem}
              alt={artista.nome}
              priority
              sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        </ModalTrigger>
        <ModalBody className="relative max-w-4xl border-[#5C3A5C]/30 bg-[#2a1f2a]">
          <BackgroundImage
            className="absolute z-0"
            backgroundColor="bg-[#000000]"
          />
          <ModalContent className="relative z-10 max-h-[90vh] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="space-y-6">
              {/* Nome */}
              <div>
                <h2 className="mb-4 text-center font-mono text-3xl font-bold tracking-tight text-sax-gold">
                  {artista.nome}
                </h2>
                <div className="mb-8 flex justify-center">
                  <Image
                    src={saxImage}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Imagens */}
              {artista.imagens && artista.imagens.length > 0 && (
                <div className="flex items-center justify-center">
                  {artista.imagens.map((img, idx) => {
                    // Rotação determinística baseada no índice
                    const rotation = ((idx * 7) % 20) - 10
                    return (
                      <motion.div
                        key={'images' + idx}
                        style={{
                          rotate: rotation,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        whileTap={{
                          scale: 1.1,
                          rotate: 0,
                          zIndex: 100,
                        }}
                        className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                      >
                        <Image
                          src={img}
                          alt={`${artista.nome} - Imagem ${idx + 1}`}
                          width={500}
                          height={500}
                          className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40"
                        />
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Atividades */}
              {artista.eventos && artista.eventos.length > 0 && (
                <div>
                  {/* <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Atividades em que Participa
                  </h3> */}
                  <div className="flex flex-col items-start gap-y-4 py-4 pl-4">
                    {artista.eventos.map((evento, idx) => {
                      // Determinar o tipo de evento e ícone correspondente
                      let IconComponent = ConcertIcon
                      if (
                        evento.toLowerCase().includes('masterclass') ||
                        evento.toLowerCase().includes('workshop')
                      ) {
                        IconComponent = MasterclassIcon
                      } else if (
                        evento.toLowerCase().includes('conferência') ||
                        evento.toLowerCase().includes('talk')
                      ) {
                        IconComponent = ConferenceIcon
                      } else if (
                        evento.toLowerCase().includes('abertura') ||
                        evento.toLowerCase().includes('encerramento')
                      ) {
                        IconComponent = EventIcon
                      } else if (evento.toLowerCase().includes('concerto')) {
                        IconComponent = ConcertIcon
                      }

                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-start"
                        >
                          <IconComponent className="mr-1 h-4 w-4 text-neutral-300" />
                          <span className="text-sm text-neutral-300">
                            {evento}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {/* Biografia */}
              {artista.biografia && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Biografia
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {biografiaText}
                    {shouldTruncate && (
                      <>
                        {' '}
                        <button
                          type="button"
                          onClick={handleToggleBiografia}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              handleToggleBiografia()
                            }
                          }}
                          className="inline text-sm font-medium text-sax-gold underline decoration-sax-gold/60 underline-offset-2 hover:decoration-sax-gold focus:ring-2 focus:ring-sax-gold focus:ring-offset-2 focus:ring-offset-[#2a1f2a] focus:outline-none"
                          aria-expanded={biografiaExpanded}
                          aria-label={
                            biografiaExpanded
                              ? 'Ver menos'
                              : 'Ver mais biografia'
                          }
                          tabIndex={0}
                        >
                          {biografiaExpanded ? 'Ver menos' : 'Ver mais'}
                        </button>
                      </>
                    )}
                  </p>
                </div>
              )}

              {/* Atuação */}
              {artista.informacoes && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    + informações
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {artista.informacoes}
                  </p>
                </div>
              )}
            </div>
          </ModalContent>
          <ModalFooter className="relative z-10 gap-4 border-t border-neutral-800 bg-neutral-950">
            <FecharButton />
            <ParticiparButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
      <h3 className="mt-8 font-mono text-xl font-bold tracking-tight text-sax-gold">
        {artista.nome}
      </h3>
      <p className="mt-1 text-base tracking-tight text-neutral-400">
        {artista.papel}
      </p>
    </div>
  )
}

// Função para determinar o ícone baseado no nome da atividade
// Componente para cada card de atividade com modal
const AtividadeCard = ({ atividade, atividadeIndex, clipPathId }) => {
  return (
    <div>
      <Modal>
        <ModalTrigger className="group relative h-70 w-full transform cursor-pointer overflow-hidden rounded-4xl focus:ring-2 focus:ring-sax-gold focus:ring-offset-2 focus:ring-offset-[#2a1f2a] focus:outline-none">
          <div
            className={clsx(
              'absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
              [
                'border-[#5C3A5C]/30',
                'border-[#B8860B]/30',
                'border-[#C85A64]/30',
              ][atividadeIndex % 3],
            )}
          />
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#2a1f2a]"
            style={{ clipPath: `url(#${clipPathId}-${atividadeIndex % 3})` }}
          >
            <Image
              src={saxImage}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 object-contain transition duration-300 group-hover:scale-110"
              unoptimized
            />
          </div>
        </ModalTrigger>
        <ModalBody className="relative max-w-4xl border-[#5C3A5C]/30 bg-[#2a1f2a]">
          <BackgroundImage
            className="absolute z-0"
            backgroundColor="bg-[#000000]"
          />
          <ModalContent className="relative z-10 max-h-[90vh] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="space-y-6">
              {/* Nome */}
              <div>
                <h2 className="mb-4 text-center font-mono text-3xl font-bold tracking-tight text-sax-gold">
                  {atividade.nome}
                </h2>
                <div className="mb-8 flex justify-center">
                  <Image
                    src={saxImage}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Horário */}
              {atividade.horario && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Horário
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividade.horario}
                  </p>
                </div>
              )}
              {/* Descrição */}
              {atividade.descricao && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Descrição
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividade.descricao}
                  </p>
                </div>
              )}

              {/* Localização */}
              {atividade.localizacao && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Localização
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividade.localizacao}
                  </p>
                </div>
              )}

              {/* Informação adicional da atividade */}
              {atividade.informacoes && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    + informações
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividade.informacoes}
                  </p>
                </div>
              )}
            </div>
          </ModalContent>
          <ModalFooter className="relative z-10 gap-4 border-t border-neutral-800 bg-neutral-950">
            <FecharButton />
            <ParticiparButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
      <h3 className="mt-8 font-mono text-xl font-bold tracking-tight text-sax-gold">
        {atividade.nome}
      </h3>
      {atividade.subtitulo && (
        <p className="mt-1 text-base tracking-tight text-neutral-400">
          {atividade.subtitulo}
        </p>
      )}
    </div>
  )
}

export function Artistas() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="artistas"
      aria-labelledby="artistas-title"
      className="py-20 font-mono sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="artistas-title"
            className="font-fonty text-5xl font-medium tracking-tighter text-neutral-200 sm:text-6xl"
          >
            Programa completo
          </h2>
          <p className="mt-4 font-fonty text-2xl tracking-tight text-neutral-300">
            Quatro dias repletos de música, aprendizagem e celebração do
            saxofone.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-x-auto sm:pb-0 lg:overflow-visible">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-[#5C3A5C]/30 lg:block" />
            <TabList className="grid min-w-max auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-none sm:min-w-max sm:grid-cols-4 sm:px-0 sm:text-center lg:max-w-2xl lg:min-w-0 lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div
                      key={`${day.nome}-${day.dataHora}-${dayIndex}`}
                      className="relative lg:pl-8"
                    >
                      <DiamondIcon
                        className={clsx(
                          'absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-sax-gold stroke-sax-gold'
                            : 'fill-transparent stroke-[#5C3A5C]/40',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-sax-gold'
                              : 'text-neutral-400',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.nome}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dataHora}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-neutral-200"
                        >
                          {day.data}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day, dayIndex) => (
              <TabPanel
                key={`${day.nome}-${day.dataHora}-${dayIndex}`}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.artistas &&
                  day.artistas.length > 0 &&
                  day.artistas.map((artista, artistaIndex) => (
                    <ArtistaCard
                      key={artistaIndex}
                      artista={artista}
                      artistaIndex={artistaIndex}
                      clipPathId={id}
                    />
                  ))}
                {day.atividades &&
                  day.atividades.length > 0 &&
                  day.atividades.map((atividade, atividadeIndex) => (
                    <AtividadeCard
                      key={atividadeIndex}
                      atividade={atividade}
                      atividadeIndex={
                        (day.artistas?.length || 0) + atividadeIndex
                      }
                      clipPathId={id}
                    />
                  ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
