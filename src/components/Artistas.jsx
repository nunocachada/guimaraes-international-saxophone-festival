'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion } from 'motion/react'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

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
import {
  Music2,
  GraduationCap,
  Presentation,
  Calendar,
  Users,
  Coffee,
  Clock,
  Mic,
  Music,
  Briefcase,
  Sparkles,
} from 'lucide-react'
import henkVanTwillertImage from '@/images/avatars/henk-van-twillert.jpg'
import tiesMellemmaImage from '@/images/Ties_Mellema.webp'
import nunoSilvaImage from '@/images/nuno_silva.jpg'
import nicolasArsinejevicImage from '@/images/Nicolas_Arsenijevic.webp'
import miguelPaisClementeImage from '@/images/miguel-pais-clemente.webp'
import luisMiguelImage from '@/images/luis-miguel.jpg'
import brunoSantosImage from '@/images/bruno-santos.jpg'
import saxImage from '@/images/sax.svg'

// Mapeamento de informações detalhadas dos artistas
const artistasInfo = {
  'Henk Van Twillert': {
    biografia:
      'Henk Van Twillert é um renomado saxofonista holandês com uma carreira internacional destacada. Especialista em pedagogia do saxofone e performance contemporânea.',
    informacoes: 'em breve',
    eventos: [
      'Dia de Abertura - Stars of the Future (primeira sessão)',
      'Workshops & Masterclasses - 9 de Julho',
      'Conferência - 7 de Julho',
    ],
    imagens: [henkVanTwillertImage],
  },
  'Nicolas Arsinejevic': {
    biografia:
      'Nicolas Arsinejevic é professor no CNSMP (Conservatoire National Supérieur de Musique et de Danse de Paris), França. Reconhecido internacionalmente pela sua excelência técnica e artística.',
    informacoes: 'em breve',
    eventos: [
      'Dia de Abertura - 7 de Julho',
      'Concertos - 8 de Julho (Conservatório)',
      'Workshops & Masterclasses - 9 de Julho',
      'Encerramento - 10 de Julho',
    ],
    imagens: [
      nicolasArsinejevicImage,
      nicolasArsinejevicImage,
      nicolasArsinejevicImage,
      nicolasArsinejevicImage,
    ],
  },
  'Ties Mellemma': {
    biografia:
      '"Não me prendo a estilos; faço música. Tenho uma curiosidade particular pela música que existe entre os estilos.\"\n\n Embora Ties Mellema seja indiscutivelmente um virtuoso do saxofone, vê-se antes de tudo como um músico. A sua arte expressa-se numa exploração contínua dos limites da música. Em 2015, Ties ficou gravemente doente durante vários anos e, para além de tocar saxofone, começou a compor com música electrónica. Após 20 anos como membro fundador do Amstel Quartet, Ties decidiu que era altura de seguir o seu próprio caminho. Lançou o seu grupo crossover PEAX em 2019, com o qual trabalhou até 2025. Atualmente, prossegue uma carreura como artista a solo, colaborando com músicos que partilham a sua visão de fusão de estilos. Ties recebeu inúmeros prémios, incluindo o prestigiado Prémio de Música dos Países Baixos. Vários álbuns, tanto como artista a solo como em conjunto, foram editados pelas suas próprias editoras, Amstel Records e PEAX Records. Ties Mellema utiliza um saxofone baixo Eppelsheim, cedido pela colecção da Fundação Holandesa de Instrumentos Musicais.',
    informacoes: 'em breve',
    eventos: [
      'Dia de Abertura - 7 de Julho',
      'Concertos - 8 de Julho',
      'Workshops & Masterclasses - 9 de Julho',
      'Ties Mellemma Talk - "Find your own voice" - 9 de Julho',
      'Encerramento - 10 de Julho',
    ],
    imagens: [tiesMellemmaImage],
  },
  'Nuno Silva': {
    biografia:
      'Nuno Silva é um saxofonista português com formação no Breda Conservatory. Reconhecido pela sua técnica refinada e interpretação expressiva.',
    informacoes: 'em breve',
    eventos: [
      'Dia de Abertura - 7 de Julho',
      'Concerto de Nuno Silva - 7 de Julho (main hall)',
      'Concertos - 8 de Julho',
      'Workshops & Masterclasses - 9 de Julho',
      'Encerramento - 10 de Julho',
    ],
    imagens: [nunoSilvaImage],
  },
  'Luis Miguel': {
    biografia:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    informacoes:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    eventos: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    ],
    imagens: [luisMiguelImage],
  },
  'Bruno Santos': {
    biografia:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    informacoes: 'em breve',
    eventos: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
    ],
    imagens: [brunoSantosImage],
  },
  'Miguel Pais Clemente': {
    biografia:
      'Miguel Pais Clemente é um destacado músico e educador português, conhecido pelo seu trabalho em pedagogia musical e performance.',
    informacoes: 'em breve',
    eventos: [
      'Dia de Abertura - 7 de Julho',
      'Conferência - 7 de Julho (com Henk van Twillert e Joaquim Gabriel)',
    ],
    imagens: [miguelPaisClementeImage],
  },
}

const days = [
  {
    nome: 'Sobre',
    data: 'Artistas',
    dataHora: '2026-07-07',
    artistas: [
      {
        nome: 'Ties Mellemma',
        papel: 'HOLANDA',
        imagem: tiesMellemmaImage,
        ...artistasInfo['Ties Mellemma'],
      },
      {
        nome: 'Nicolas Arsinejevic',
        papel: 'França',
        imagem: nicolasArsinejevicImage,
        ...artistasInfo['Nicolas Arsinejevic'],
      },
      {
        nome: 'Henk Van Twillert',
        papel: 'HOLANDA',
        imagem: henkVanTwillertImage,
        ...artistasInfo['Henk Van Twillert'],
      },
      {
        nome: 'Bruno Santos',
        papel: 'PORTUGAL',
        imagem: brunoSantosImage,
        ...artistasInfo['Bruno Santos'],
      },
      {
        nome: 'Nuno Silva',
        papel: 'PORTUGAL',
        imagem: nunoSilvaImage,
        ...artistasInfo['Nuno Silva'],
      },
      {
        nome: 'Luis Miguel',
        papel: 'PORTUGAL',
        imagem: luisMiguelImage,
        ...artistasInfo['Luis Miguel'],
      },
    ],
    atividades: [],
  },
  {
    nome: 'Programação',
    data: '7 de Julho',
    dataHora: '2026-07-07',
    artistas: [],
    atividades: [
      {
        nome: 'Receção aos participantes',
        descricao: null, // em breve
      },
      {
        nome: 'Warm up work',
        descricao: 'Sax, Body & Mind',
      },
      {
        nome: 'Masterclasses',
        descricao: 'Prof. Ties Mellema / Nicolas A. / Nuno S.',
      },
      {
        nome: 'Stars of the Future',
        descricao: 'Henk van Twillert (first session)',
      },
      {
        nome: 'Lunch concert',
        descricao:
          'Stars of the Future (Grupo 1) · Pátio TJGA (Piso 1 – salas individuais)',
      },
      {
        nome: 'Masterclass',
        descricao: 'Prof. Ties Mellema / Nicholas A.',
      },
      {
        nome: 'Conferência',
        descricao: 'Miguel Pais Clemente, Henk van Twillert e Joaquim Gabriel',
      },
      {
        nome: 'All Sax Orchestra rehearsal',
        descricao: null,
      },
      {
        nome: 'Concerto de Nuno Silva',
        descricao: 'Main hall of the school',
      },
    ],
  },
  {
    nome: 'Programação',
    data: '8 de Julho',
    dataHora: '2026-07-08',
    artistas: [],
    atividades: [
      {
        nome: 'Masterclasses',
        descricao: 'Prof. Ties Mellema / Prof. Nicolas A. / Nuno S.',
      },
      {
        nome: 'Stars of the Future',
        descricao: 'Henk van Twillert (second session)',
      },
      {
        nome: 'Lunch concert',
        descricao:
          'Stars of the Future (Grupo 2) · Pátio TJGA / Bandas de Garagem',
      },
      {
        nome: 'Masterclass',
        descricao: 'Prof. Ties Mellema / Prof. Nicholas Arsenevich',
      },
      {
        nome: "Sponsors' time",
        descricao:
          'Sponsors Happy Hour · Cada sponsor apresenta a sua marca e produtos (15–25 minutos)',
      },
      {
        nome: 'Coro Cordão',
        descricao: 'Bandas de Garagem',
      },
      {
        nome: 'All Sax Orchestra rehearsal',
        descricao: null,
      },
      {
        nome: 'Concerto no Conservatório',
        descricao: 'Nicolas A.',
      },
    ],
  },
  {
    nome: 'Programação',
    data: '9 de Julho',
    dataHora: '2026-07-09',
    artistas: [],
    atividades: [
      {
        nome: 'Masterclass',
        descricao: 'Prof. Ties Mellema / Nuno S.',
      },
      {
        nome: 'Jazz Workshop',
        descricao: 'Eastman artist',
      },
      {
        nome: 'Jazz concert',
        descricao: null,
      },
      {
        nome: 'Ties Mellema Talk',
        descricao: 'Find your own voice',
      },
      {
        nome: 'Ama Sax Orchestra rehearsal',
        descricao: null,
      },
    ],
  },
  {
    nome: 'Programação',
    data: '10 de Julho',
    dataHora: '2026-07-10',
    artistas: [],
    atividades: [
      {
        nome: 'Preparation time for final concerts',
        descricao: null,
      },
      {
        nome: 'All Sax Orchestra / Be Sax Orchestra rehearsal',
        descricao: null,
      },
      {
        nome: 'Ensaio Coro Cordão',
        descricao: null,
      },
      {
        nome: 'CAA Concert T2Sax',
        descricao: 'Final concert, with soloists · Teatro Jordão',
      },
    ],
  },
]

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

// Mapeamento de informações detalhadas das atividades
const atividadesInfo = {
  'Receção aos participantes': {
    descricao:
      'Momento de boas-vindas e receção a todos os participantes do festival. Será fornecida informação importante sobre o programa e as instalações.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '09:00 - 09:30',
    icon: Users,
  },
  'Warm up work': {
    descricao:
      'Sessão de aquecimento físico e mental para músicos. Uma abordagem holística que combina técnica do saxofone com exercícios de corpo e mente para preparar os participantes para o dia.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '09:45 - 10:15',
    icon: Sparkles,
  },
  Masterclass: {
    descricao:
      'Sessões de masterclass com professores renomados internacionalmente. Oportunidade única para aprender técnicas avançadas, interpretação e receber feedback personalizado dos melhores profissionais do saxofone.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: 'Vários horários ao longo do festival',
    icon: GraduationCap,
  },
  'Stars of the Future': {
    descricao:
      'Programa dedicado aos jovens talentos do saxofone. Sessões especiais com Henk van Twillert para desenvolver e destacar os futuros astros do saxofone.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '11:30 - 12:30',
    icon: Sparkles,
  },
  'Lunch concert': {
    descricao:
      'Concertos durante o almoço apresentados pelos participantes do programa "Stars of the Future". Uma oportunidade para desfrutar de música enquanto se alimenta.',
    localizacao: 'Pátio TJGA (Piso 1 – salas individuais) / Bandas de Garagem',
    horario: '13:10 - 13:30',
    icon: Music,
  },
  Conferência: {
    descricao:
      'Conferência com especialistas sobre temas relevantes para o mundo do saxofone. Uma oportunidade para discussão e partilha de conhecimento.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '16:15 - 17:30',
    icon: Presentation,
  },
  'All Sax Orchestra rehearsal': {
    descricao:
      'Ensaios da All Sax Orchestra, preparando-se para as apresentações finais. Uma experiência única de tocar em orquestra dedicada exclusivamente ao saxofone.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: 'Vários horários',
    icon: Music2,
  },
  'Concerto de Nuno Silva': {
    descricao:
      'Concerto solo do renomado saxofonista português Nuno Silva. Uma apresentação especial no hall principal da escola.',
    localizacao: 'Main hall of the school',
    horario: '21:00 - 22:30',
    icon: Music2,
  },
  'Concerto no Conservatório': {
    descricao:
      'Concerto especial no Conservatório com Nicolas Arsinejevic. Uma apresentação única num espaço histórico e acústico excecional.',
    localizacao: 'Conservatório',
    horario: '21:00 - 22:30',
    icon: Music2,
  },
  "Sponsors' time": {
    descricao:
      'Momento dedicado aos patrocinadores do festival. Cada patrocinador terá a oportunidade de apresentar a sua marca e produtos durante 15-25 minutos.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '14:30 - 16:30',
    icon: Briefcase,
  },
  'Coro Cordão': {
    descricao:
      'Apresentação do Coro Cordão, uma das bandas de garagem participantes no festival.',
    localizacao: 'Bandas de Garagem',
    horario: '15:30 - 16:30',
    icon: Music,
  },
  'Jazz Workshop': {
    descricao:
      'Workshop de jazz com um artista Eastman. Aprenda técnicas de improvisação, swing e interpretação jazzística no saxofone.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '11:15 - 12:45',
    icon: Mic,
  },
  'Jazz concert': {
    descricao:
      'Concerto de jazz apresentado pelos participantes do workshop. Uma oportunidade para ouvir e desfrutar de música jazz ao vivo.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '13:00 - 13:20',
    icon: Music,
  },
  'Ties Mellema Talk': {
    descricao:
      'Talk inspiracional com Ties Mellema sobre "Find your own voice" (Encontra a tua própria voz). Uma sessão sobre desenvolvimento artístico pessoal e expressão única.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '17:30 - 18:35',
    icon: Presentation,
  },
  'Ama Sax Orchestra rehearsal': {
    descricao:
      'Ensaios da Ama Sax Orchestra, preparando-se para a apresentação final. Uma experiência única de tocar em orquestra dedicada exclusivamente ao saxofone.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '18:35 - 19:45',
    icon: Music2,
  },
  'Preparation time for final concerts': {
    descricao:
      'Tempo dedicado à preparação final para os concertos de encerramento. Momento para ensaios individuais e em grupo.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '09:30 - 13:00',
    icon: Clock,
  },
  'All Sax Orchestra / Be Sax Orchestra rehearsal': {
    descricao:
      'Ensaios finais das orquestras All Sax Orchestra e Be Sax Orchestra, preparando-se para o concerto final.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '09:30 - 13:00',
    icon: Music2,
  },
  'Ensaio Coro Cordão': {
    descricao:
      'Ensaio final do Coro Cordão, preparando-se para a apresentação no concerto final.',
    localizacao: 'Piso 2 do Teatro Jordão',
    horario: '09:30 - 13:00',
    icon: Music,
  },
  'CAA Concert T2Sax': {
    descricao:
      'Concerto final do festival com a participação de solistas. Uma apresentação grandiosa no Teatro Jordão que marca o encerramento do festival.',
    localizacao: 'Teatro Jordão',
    horario: '21:00 - 23:00',
    icon: Music2,
  },
}

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
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/masterclass/')}
      className="w-28 cursor-pointer rounded-md border border-neutral-300 bg-white px-2 py-1 text-sm text-neutral-900 hover:bg-neutral-100"
    >
      Participar
    </button>
  )
}

// Componente para cada card de artista com modal
const ArtistaCard = ({ artista, artistaIndex, clipPathId }) => {
  const artistaInfo = artistasInfo[artista.nome]

  if (!artistaInfo) {
    return null
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
              {artistaInfo.imagens && artistaInfo.imagens.length > 0 && (
                <div className="flex items-center justify-center">
                  {artistaInfo.imagens.map((img, idx) => {
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
              {artistaInfo.eventos && artistaInfo.eventos.length > 0 && (
                <div>
                  {/* <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Atividades em que Participa
                  </h3> */}
                  <div className="flex flex-col items-start gap-y-4 py-4 pl-4">
                    {artistaInfo.eventos.map((evento, idx) => {
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
              {artistaInfo.biografia && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Biografia
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {artistaInfo.biografia}
                  </p>
                </div>
              )}

              {/* Atuação */}
              {artistaInfo.informacoes && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    + informações
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {artistaInfo.informacoes}
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
const getActivityIcon = (nomeAtividade) => {
  const nomeMinusculo = nomeAtividade.toLowerCase()
  if (
    nomeMinusculo.includes('masterclass') ||
    nomeMinusculo.includes('workshop')
  ) {
    return MasterclassIcon
  }
  if (nomeMinusculo.includes('concerto') || nomeMinusculo.includes('concert')) {
    return ConcertIcon
  }
  if (nomeMinusculo.includes('conferência') || nomeMinusculo.includes('talk')) {
    return ConferenceIcon
  }
  if (nomeMinusculo.includes('rehearsal') || nomeMinusculo.includes('ensaio')) {
    return Music2
  }
  if (nomeMinusculo.includes('lunch')) {
    return Coffee
  }
  if (nomeMinusculo.includes('sponsor')) {
    return Briefcase
  }
  if (
    nomeMinusculo.includes('warm up') ||
    nomeMinusculo.includes('preparation')
  ) {
    return Clock
  }
  if (nomeMinusculo.includes('stars')) {
    return Sparkles
  }
  return EventIcon
}

// Componente para cada card de atividade com modal
const AtividadeCard = ({ atividade, atividadeIndex, clipPathId }) => {
  const atividadeInfo = atividadesInfo[atividade.nome]
  const IconComponent = atividadeInfo?.icon || getActivityIcon(atividade.nome)

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
            <IconComponent
              className="h-16 w-16 text-sax-gold transition duration-300 group-hover:scale-110"
              strokeWidth={1.5}
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
                  <IconComponent
                    className="h-16 w-16 text-sax-gold"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Descrição */}
              {atividadeInfo?.descricao && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Descrição
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividadeInfo.descricao}
                  </p>
                </div>
              )}

              {/* Localização */}
              {atividadeInfo?.localizacao && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Localização
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividadeInfo.localizacao}
                  </p>
                </div>
              )}

              {/* Horário */}
              {atividadeInfo?.horario && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Horário
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividadeInfo.horario}
                  </p>
                </div>
              )}

              {/* Informação adicional da atividade */}
              {atividade.descricao && (
                <div>
                  <h3 className="mb-3 font-mono text-xl font-semibold text-neutral-200">
                    Informações adicionais
                  </h3>
                  <p className="leading-relaxed text-neutral-300">
                    {atividade.descricao}
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
      {atividade.descricao && (
        <p className="mt-1 text-base tracking-tight text-neutral-400">
          {atividade.descricao}
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
      className="py-20 font-syne sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="artistas-title"
            className="font-mono text-4xl font-medium tracking-tighter text-neutral-200 sm:text-5xl"
          >
            Programa completo
          </h2>
          <p className="mt-4 font-mono text-2xl tracking-tight text-neutral-300">
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
