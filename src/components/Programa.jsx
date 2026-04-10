'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { useDictionary } from '@/lib/i18n/DictionaryContext'
import { resolveActivityI18n } from '@/lib/resolveActivityI18n'

const programa = [
  {
    date: '7 de Julho',
    dateTime: '2026-07-07',
    summary:
      'O primeiro dia do festival começa com receção aos participantes, warm up work, masterclasses e concertos.',
    timeSlots: [
      {
        i18nKey: 'fest_0707_rececao',
        name: 'Receção aos participantes',
        description: null,
        start: '09:00',
        end: '09:30',
      },
      {
        i18nKey: 'fest_0707_warmup',
        name: 'Warm up work ',
        description: 'Sax, Body & Mind - Henk van Twillert',
        start: '09:45',
        end: '10:15',
      },
      {
        i18nKey: 'fest_0707_mc_tnn',
        name: 'Masterclasses',
        description: 'Ties Mellema / Nicolas Arsenijevic / Nuno Silva',
        start: '10:30',
        end: '13:00',
      },
      {
        i18nKey: 'fest_0707_stars',
        name: 'Stars of the Future',
        description: 'Henk van Twillert (a confirmar)',
        start: '11:30',
        end: '12:30',
      },
      {
        i18nKey: 'fest_0707_lunch_g1',
        name: 'Lunch concert',
        description: 'Stars of the Future (Grupo 1)',
        start: '13:10',
        end: '13:30',
      },
      {
        i18nKey: 'fest_0707_mc_tn',
        name: 'Masterclasses',
        description: 'Ties Mellema / Nicolas Arsenijevic',
        start: '14:30',
        end: '16:00',
      },

      {
        i18nKey: 'fest_0707_conferencia',
        name: 'Conferência',
        description:
          'Miguel Pais Clemente, Henk van Twillert e Joaquim Gabriel',
        start: '16:15',
        end: '17:30',
      },
      {
        i18nKey: 'fest_0707_be_sax',
        name: 'Be Sax Orchestra - Ensaio',
        description: null,
        start: '17:30',
        end: '18:45',
      },
      {
        i18nKey: 'fest_0707_all_sax',
        name: 'All Sax Orchestra - Ensaio',
        description: null,
        start: '18:00',
        end: '20:05',
      },
      {
        i18nKey: 'fest_0707_concerto_nuno',
        name: 'Concerto de Nuno Silva',
        description: 'Conservatório de Guimarães (Salão nobre)',
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
        i18nKey: 'fest_0708_mc_tnn',
        name: 'Masterclasses',
        description: 'Ties Mellema / Nicolas Arsenijevic / Nuno Silva',
        start: '09:00',
        end: '13:00',
      },
      {
        i18nKey: 'fest_0708_stars',
        name: 'Stars of the Future',
        description: 'Henk van Twillert ( a confirmar)',
        start: '11:30',
        end: '12:30',
      },
      {
        i18nKey: 'fest_0708_lunch_g2',
        name: 'Lunch concert',
        description: 'Stars of the Future (Grupo 2) ',
        start: '13:10',
        end: '13:30',
      },

      {
        i18nKey: 'fest_0708_mc_tn',
        name: 'Masterclasses',
        description: 'Ties Mellema / Nicolas Arsenijevic',
        start: '14:30',
        end: '16:00',
      },

      {
        i18nKey: 'fest_0708_be_sax',
        name: 'Be Sax Orchestra - Ensaio',
        description: null,
        start: '16:15',
        end: '17:20',
      },
      {
        i18nKey: 'fest_0708_all_sax',
        name: 'All Sax Orchestra - Ensaio',
        description: null,
        start: '17:30',
        end: '18:20',
      },

      {
        i18nKey: 'fest_0708_concerto_nicolas',
        name: 'Concerto de Nicolas Arsenijevic',
        description: 'Conservatório de Guimarães (Salão nobre)',
        start: '21:30',
        end: '22:30',
      },
    ],
  },
  {
    date: '9 de Julho',
    dateTime: '2026-07-09',
    summary:
      'Terceiro dia com masterclasses, jazz workshop, talk de Ties Mellema e ensaio da All Sax Orchestra.',
    timeSlots: [
      {
        i18nKey: 'fest_0709_mc_tnbs',
        name: 'Masterclasses',
        description: 'Ties Mellema / Nuno Silva / Bruno Santos',
        start: '09:00',
        end: '11:00',
      },
      {
        i18nKey: 'fest_0709_jazz_ws',
        name: 'Workshop de jazz',
        description: 'Luis Miguel (artista Eastman)',
        start: '11:15',
        end: '12:45',
      },
      {
        i18nKey: 'fest_0709_jazz_concert',
        name: 'Concerto de jazz',
        description: null,
        start: '13:00',
        end: '13:20',
      },
      {
        i18nKey: 'fest_0709_sponsors',
        name: "Sponsors' time",
        description: 'Sponsors Happy Hour',
        start: '14:30',
        end: '17:15',
      },
      {
        i18nKey: 'fest_0709_ties_talk',
        name: 'Ties Mellema Talk',
        description: 'Find your own voice',
        start: '17:30',
        end: '18:20',
      },
      {
        i18nKey: 'fest_0709_all_sax',
        name: 'All Sax Orchestra - Ensaio',
        description: null,
        start: '18:35',
        end: '20:00',
      },
      {
        i18nKey: 'fest_0709_concerto_ties',
        name: 'Concerto Ties Mellema',
        description: 'CAAA Guimarães',
        start: '21:30',
        end: '22:30',
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
        i18nKey: 'fest_0710_prep',
        name: 'Preparação para os concertos finais',
        description:
          'All Sax Orchestra, Be Sax Orchestra, Coro Cordão, solistas',
        start: '09:30',
        end: '13:00',
      },

      {
        i18nKey: 'fest_0710_coro',
        name: 'Concerto Coro Cordão',
        description: null,
        start: '15:30',
        end: '16:30',
      },
      {
        i18nKey: 'fest_0710_final',
        name: 'Concerto final ',
        description: 'All Sax Orchestra + solistas',
        start: '17:30',
        end: '19:00',
      },
    ],
  },
]

function ProgramaTabbed({ slotAriaAbout, slotAriaAt }) {
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
            <TimeSlots
              day={day}
              slotAriaAbout={slotAriaAbout}
              slotAriaAt={slotAriaAt}
            />
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

function TimeSlots({ day, className, slotAriaAbout, slotAriaAt }) {
  const { t } = useDictionary('artistas')

  const getSlotName = (slot) =>
    resolveActivityI18n(
      t,
      slot.i18nKey,
      'programSlotName',
      resolveActivityI18n(t, slot.i18nKey, 'title', slot.name),
    )

  const getSlotDescription = (slot) =>
    resolveActivityI18n(
      t,
      slot.i18nKey,
      'programDescription',
      resolveActivityI18n(t, slot.i18nKey, 'subtitle', slot.description),
    )

  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-[#2a1f2a]/80 px-10 py-14 text-center shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => {
        const slotName = getSlotName(timeSlot)
        const slotDescription = getSlotDescription(timeSlot)
        return (
        <li
          key={`${timeSlot.start}-${timeSlot.name}`}
          aria-label={`${slotName} ${slotDescription ? `${slotAriaAbout} ${slotDescription}` : ''} ${slotAriaAt} ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-[#5C3A5C]/10" />
          )}
          <h4 className="font-fonty text-2xl font-semibold text-neutral-200">
            {slotName}
          </h4>
          {slotDescription && (
            <p className="mt-1 font-mono text-sm tracking-tight text-neutral-300">
              {slotDescription}
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
        )
      })}
    </ol>
  )
}

function ProgramaStatic({ slotAriaAbout, slotAriaAt }) {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8">
      {programa.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots
            day={day}
            className="mt-10"
            slotAriaAbout={slotAriaAbout}
            slotAriaAt={slotAriaAt}
          />
        </section>
      ))}
    </div>
  )
}

export function Programa() {
  const { t } = useDictionary('programa')

  return (
    <section id="programa" aria-label={t('aria')} className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-mono text-4xl font-medium tracking-tighter text-neutral-200 sm:text-5xl">
            {t('heading')}
          </h2>
          <p className="mt-4 font-mono text-2xl tracking-tight text-neutral-300">
            {t('subheading')}
          </p>
        </div>
      </Container>
      <div className="relative mt-24 sm:mt-44">
        <BackgroundImage
          position="right"
          className="-top-10 -bottom-32 sm:-top-20"
        />
        <Container className="relative">
          <ProgramaTabbed
            slotAriaAbout={t('slotAriaAbout')}
            slotAriaAt={t('slotAriaAt')}
          />
          <ProgramaStatic
            slotAriaAbout={t('slotAriaAbout')}
            slotAriaAt={t('slotAriaAt')}
          />
        </Container>
      </div>
    </section>
  )
}
