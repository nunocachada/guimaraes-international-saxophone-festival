'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const programa = [
  {
    date: '7 de Julho',
    dateTime: '2026-07-07',
    summary:
      'O primeiro dia do festival começa com receção aos participantes, warm up work, masterclasses e concertos.',
    timeSlots: [
      {
        name: 'Receção aos participantes',
        description: null,
        start: '09:00',
        end: '09:30',
      },
      {
        name: 'Warm up work',
        description: 'Sax, Body & Mind',
        start: '09:45',
        end: '10:15',
      },
      {
        name: 'Masterclass',
        description: 'Prof. Ties Mellema / Nicolas A. / Nuno S.',
        start: '10:30',
        end: '11:30',
      },
      {
        name: 'Stars of the Future',
        description: 'Henk van Twillert (first session)',
        start: '11:30',
        end: '12:30',
      },
      {
        name: 'Lunch concert',
        description:
          'Stars of the Future (Grupo 1) · Pátio TJGA (Piso 1 – salas individuais)',
        start: '13:10',
        end: '13:30',
      },
      {
        name: 'Masterclass',
        description: 'Prof. Ties Mellema / Nicholas A.',
        start: '14:30',
        end: '16:00',
      },
      {
        name: 'Conferência',
        description:
          'Miguel Pais Clemente, Henk van Twillert e Joaquim Gabriel',
        start: '16:15',
        end: '17:30',
      },
      {
        name: 'All Sax Orchestra rehearsal',
        description: null,
        start: '17:30',
        end: '18:30',
      },
      {
        name: 'Concerto de Nuno Silva',
        description: 'Main hall of the school',
        start: '21:00',
        end: '22:30',
      },
    ],
  },
  {
    date: '8 de Julho',
    dateTime: '2026-07-08',
    summary:
      'Segundo dia com masterclasses, Stars of the Future, conferências e concerto no Conservatório.',
    timeSlots: [
      {
        name: 'Masterclass',
        description: 'Prof. Ties Mellema / Prof. Nicolas A. / Nuno S.',
        start: '09:00',
        end: '13:00',
      },
      {
        name: 'Stars of the Future',
        description: 'Henk van Twillert (second session)',
        start: '11:30',
        end: '12:30',
      },
      {
        name: 'Lunch concert',
        description:
          'Stars of the Future (Grupo 2) · Pátio TJGA / Bandas de Garagem',
        start: '13:10',
        end: '13:30',
      },
      {
        name: 'Masterclass',
        description: 'Prof. Ties Mellema / Prof. Nicholas Arsenevich',
        start: '14:30',
        end: '16:00',
      },
      {
        name: "Sponsors' time",
        description:
          'Sponsors Happy Hour · Cada sponsor apresenta a sua marca e produtos (15–25 minutos)',
        start: '14:30',
        end: '16:30',
      },
      {
        name: 'Coro Cordão',
        description: 'Bandas de Garagem',
        start: '15:30',
        end: '16:30',
      },
      {
        name: 'All Sax Orchestra rehearsal',
        description: null,
        start: '17:30',
        end: '19:00',
      },
      {
        name: 'Concerto no Conservatório',
        description: 'Nicolas A.',
        start: '21:00',
        end: '22:30',
      },
    ],
  },
  {
    date: '9 de Julho',
    dateTime: '2026-07-09',
    summary:
      'Terceiro dia com masterclasses, jazz workshop, talk de Ties Mellema e ensaio da Ama Sax Orchestra.',
    timeSlots: [
      {
        name: 'Masterclass',
        description: 'Prof. Ties Mellema / Nuno S.',
        start: '09:00',
        end: '11:00',
      },
      {
        name: 'Jazz Workshop',
        description: 'Eastman artist',
        start: '11:15',
        end: '12:45',
      },
      {
        name: 'Jazz concert',
        description: null,
        start: '13:00',
        end: '13:20',
      },
      {
        name: 'Ties Mellema Talk',
        description: 'Find your own voice',
        start: '17:30',
        end: '18:35',
      },
      {
        name: 'Ama Sax Orchestra rehearsal',
        description: null,
        start: '18:35',
        end: '19:45',
      },
    ],
  },
  {
    date: '10 de Julho',
    dateTime: '2026-07-10',
    summary:
      'Dia final com preparação para os concertos finais, ensaios e concerto final no Teatro Jordão.',
    timeSlots: [
      {
        name: 'Preparation time for final concerts',
        description: null,
        start: '09:30',
        end: '13:00',
      },
      {
        name: 'All Sax Orchestra / Be Sax Orchestra rehearsal',
        description: null,
        start: '09:30',
        end: '13:00',
      },
      {
        name: 'Ensaio Coro Cordão',
        description: null,
        start: '09:30',
        end: '13:00',
      },
      {
        name: 'CAA Concert T2Sax',
        description: 'Final concert, with soloists · Teatro Jordão',
        start: '21:00',
        end: '23:00',
      },
    ],
  },
]

function ProgramaTabbed() {
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
            {programa.map((day, dayIndex) => (
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
        {programa.map((day) => (
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
      <h3 className="font-fonty text-3xl font-semibold text-neutral-200">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 font-mono text-sm tracking-tight text-neutral-300">
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
        'space-y-8 bg-[#2a1f2a]/80 px-10 py-14 text-center shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={`${timeSlot.start}-${timeSlot.name}`}
          aria-label={`${timeSlot.name} ${timeSlot.description ? `sobre ${timeSlot.description}` : ''} às ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-[#5C3A5C]/10" />
          )}
          <h4 className="font-fonty text-2xl font-semibold text-neutral-200">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 font-mono text-sm tracking-tight text-neutral-300">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-sax-gold">
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

function ProgramaStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
      {programa.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Programa() {
  return (
    <section id="programa" aria-label="Programa" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-mono text-4xl font-medium tracking-tighter text-neutral-200 sm:text-5xl">
            Quatro dias repletos de música, aprendizagem e celebração do
            saxofone.
          </h2>
          <p className="mt-4 font-mono text-2xl tracking-tight text-neutral-300">
            Um programa completo com concertos, masterclasses e workshops. Uma
            experiência única para músicos e amantes da música.
          </p>
        </div>
      </Container>
      <div className="relative mt-24 sm:mt-44">
        <BackgroundImage
          position="right"
          className="-top-10 -bottom-32 sm:-top-20"
        />
        <Container className="relative">
          <ProgramaTabbed />
          <ProgramaStatic />
        </Container>
      </div>
    </section>
  )
}
