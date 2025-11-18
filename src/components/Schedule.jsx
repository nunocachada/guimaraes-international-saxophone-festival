'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: '7 de Julho',
    dateTime: '2026-07-07',
    summary:
      'O primeiro dia do festival começa com concertos de abertura e apresentações dos principais artistas.',
    timeSlots: [
      {
        name: 'Concertos de Abertura',
        description: 'Apresentação dos artistas principais',
        start: '10:00',
        end: '11:30',
      },
      {
        name: 'Masterclass',
        description: 'Técnicas avançadas de saxofone',
        start: '11:30',
        end: '13:00',
      },
      {
        name: 'Concerto de Câmara',
        description: 'Música de câmara para saxofone',
        start: '14:30',
        end: '16:00',
      },
      {
        name: 'Pausa',
        description: null,
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'Concerto Principal',
        description: 'Professores convidados e artistas',
        start: '17:00',
        end: '18:30',
      },
      {
        name: 'Workshop',
        description: 'Improvisação e jazz',
        start: '19:00',
        end: '20:30',
      },
      {
        name: 'Concerto Noturno',
        description: 'Música contemporânea',
        start: '21:00',
        end: '22:30',
      },
    ],
  },
  {
    date: '8 de Julho',
    dateTime: '2026-07-08',
    summary:
      'Segundo dia dedicado a masterclasses, workshops e concertos com diferentes estilos musicais.',
    timeSlots: [
      {
        name: 'Masterclass Clássica',
        description: 'Repertório clássico para saxofone',
        start: '10:00',
        end: '11:30',
      },
      {
        name: 'Workshop de Jazz',
        description: 'Improvisação e técnicas de jazz',
        start: '11:30',
        end: '13:00',
      },
      {
        name: 'Concerto de Alunos',
        description: 'Apresentação dos participantes',
        start: '14:30',
        end: '16:00',
      },
      {
        name: 'Pausa',
        description: null,
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'Masterclass Avançada',
        description: 'Técnicas profissionais',
        start: '17:00',
        end: '18:30',
      },
      {
        name: 'Concerto de Gala',
        description: 'Artistas internacionais',
        start: '19:00',
        end: '20:30',
      },
      {
        name: 'Jam Session',
        description: 'Sessão aberta de improvisação',
        start: '21:00',
        end: '22:30',
      },
    ],
  },
  {
    date: '9 de Julho',
    dateTime: '2026-07-09',
    summary:
      'Terceiro dia com workshops especiais e masterclasses com os professores convidados.',
    timeSlots: [
      {
        name: 'Workshop Especial',
        description: 'Composição e arranjo',
        start: '10:00',
        end: '11:30',
      },
      {
        name: 'Masterclass com Professores Convidados',
        description: 'Nicolas Arsinejevic, Ties Mellemma, Nuno Silva',
        start: '11:30',
        end: '13:00',
      },
      {
        name: 'Concerto de Professores',
        description: 'Apresentação dos professores convidados',
        start: '14:30',
        end: '16:00',
      },
      {
        name: 'Pausa',
        description: null,
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'Workshop Avançado',
        description: 'Técnicas profissionais e preparação',
        start: '17:00',
        end: '18:30',
      },
      {
        name: 'Concerto Noturno',
        description: 'Música contemporânea e experimental',
        start: '19:00',
        end: '20:30',
      },
      {
        name: 'Sessão de Networking',
        description: 'Encontro entre participantes e professores',
        start: '21:00',
        end: '22:30',
      },
    ],
  },
  {
    date: '10 de Julho',
    dateTime: '2026-07-10',
    summary:
      'Dia final com workshops especiais, concertos de encerramento e celebração do festival.',
    timeSlots: [
      {
        name: 'Workshop Final',
        description: 'Composição e arranjo avançado',
        start: '10:00',
        end: '11:30',
      },
      {
        name: 'Masterclass Final',
        description: 'Preparação para carreira profissional',
        start: '11:30',
        end: '13:00',
      },
      {
        name: 'Concerto de Encerramento',
        description: 'Todos os artistas e professores',
        start: '14:30',
        end: '16:00',
      },
      {
        name: 'Pausa',
        description: null,
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'Cerimónia de Encerramento',
        description: 'Entrega de certificados',
        start: '17:00',
        end: '18:00',
      },
      {
        name: 'Concerto Final',
        description: 'Grande concerto de encerramento',
        start: '19:00',
        end: '20:30',
      },
      {
        name: 'Recepção',
        description: 'Celebração do festival',
        start: '21:00',
        end: '23:00',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-[#5C3A5C]">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-[#5C3A5C]">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-[#5C3A5C]/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} ${timeSlot.description ? `sobre ${timeSlot.description}` : ''} às ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-[#5C3A5C]/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-[#5C3A5C]">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-[#5C3A5C]">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}:00+01:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}:00+01:00`}>
              {timeSlot.end}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-[#5C3A5C] sm:text-5xl">
            Quatro dias repletos de música, aprendizagem e celebração do
            saxofone.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[#5C3A5C]">
            Um programa completo com concertos, masterclasses e workshops com os
            melhores saxofonistas do mundo. Uma experiência única para músicos e
            amantes da música.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
