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
    dateLabelKey: 'jul07',
    dateTime: '2026-07-07',
    summary:
      'O primeiro dia do festival começa com receção aos participantes, warm up work, masterclasses e concertos.',
    timeSlots: [
      {
        i18nKey: 'fest_0707_rececao_warmup',
        name: 'Receção aos participantes e Warm up work',
        description: 'Henk van Twillert',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '08:30',
        end: null,
      },
      {
        i18nKey: 'fest_0707_mc_tnn',
        name: 'Masterclasses',
        description: 'Nicolas Arsenijevic, Ties Mellema, Nuno Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '09:00',
        end: null,
      },
      {
        i18nKey: 'fest_0707_coffee',
        name: 'Coffe break',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:00',
        end: null,
      },
      {
        i18nKey: 'fest_0707_pocket_show',
        name: 'Pocket Show',
        description: 'Gonçalo Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '13:00',
        end: null,
      },
      {
        i18nKey: 'fest_0707_mc_tnn',
        name: 'Masterclasses',
        description: 'Nicolas Arsenijevic, Ties Mellema, Nuno Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '14:30',
        end: null,
      },
      {
        i18nKey: 'fest_0707_conferencia',
        name: 'Conferência',
        subtitle: 'A Música como Experiência Integral',
        description:
          'Miguel Pais Clemente, Henk van Twillert e Joaquim Gabriel',
        location: 'Salão nobre do Conservatório de Guimarães',
        start: '16:15',
        end: null,
      },
      {
        i18nKey: 'fest_0707_be_sax',
        name: 'Orquestra BE_SAX — Ensaio',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '18:00',
        end: null,
      },
      {
        i18nKey: 'fest_0707_all_sax',
        name: 'All Sax Orchestra — Ensaio',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '18:45',
        end: null,
      },
      {
        i18nKey: 'fest_0707_concerto_nuno',
        name: 'Concerto',
        description: 'Nuno Silva e Bruno Santos',
        location: 'Salão Nobre do Conservatório de Guimarães',
        start: '21:30',
        end: null,
      },
    ],
  },
  {
    date: '8 de Julho',
    dateLabelKey: 'jul08',
    dateTime: '2026-07-08',
    summary:
      'Segundo dia com masterclasses, pocket show e concerto na Igreja de São Francisco.',
    timeSlots: [
      {
        i18nKey: 'fest_0708_mc_htnn',
        name: 'Masterclasses',
        description:
          'Henk van Twillert, Nicolas Arsenijevic, Ties Mellema, Nuno Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '09:00',
        end: null,
      },
      {
        i18nKey: 'fest_0708_coffee',
        name: 'Coffe break',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:00',
        end: null,
      },
      {
        i18nKey: 'fest_0708_pocket_show',
        name: 'Pocket Show',
        description: 'Nuno Ramos',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '13:00',
        end: null,
      },
      {
        i18nKey: 'fest_0708_mc_tn',
        name: 'Masterclasses',
        description: 'Nicolas Arsenijevic, Ties Mellema, Nuno Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '14:30',
        end: null,
      },
      {
        i18nKey: 'fest_0708_be_sax',
        name: 'Orquestra BE_SAX — Ensaio',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '16:15',
        end: null,
      },
      {
        i18nKey: 'fest_0708_all_sax',
        name: 'All Sax Orchestra — Ensaio',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '17:30',
        end: null,
      },
      {
        i18nKey: 'fest_0708_concerto_nicolas',
        name: 'Concerto',
        description:
          'Henk van Twillert & Vento do Norte, Nicolas Arsenijevic',
        location: 'Igreja de São Francisco, Guimarães',
        start: '21:30',
        end: null,
      },
    ],
  },
  {
    date: '9 de Julho',
    dateLabelKey: 'jul09',
    dateTime: '2026-07-09',
    summary:
      'Terceiro dia com masterclasses, workshop de jazz, Sponsor\'s Happy Hour, palestra de Ties Mellema e concerto CAAA.',
    timeSlots: [
      {
        i18nKey: 'fest_0709_mc_htnbs',
        name: 'Masterclasses',
        description:
          'Henk van Twillert, Ties Mellema, Nuno Silva, Bruno Santos',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '09:00',
        end: null,
      },
      {
        i18nKey: 'fest_0709_coffee',
        name: 'Coffe break',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:00',
        end: null,
      },
      {
        i18nKey: 'fest_0709_jazz_ws',
        name: 'Workshop de Jazz',
        description: 'Luís Miguel',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:30',
        end: null,
      },
      {
        i18nKey: 'fest_0709_jazz_pocket',
        name: 'Jazz Pocket Show',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '13:00',
        end: null,
      },
      {
        i18nKey: 'fest_0709_sponsors',
        name: "Sponsor's Happy Hour",
        description: null,
        location: 'Espaço dos Patrocinadores, Conservatório de Guimarães',
        start: '14:30',
        end: null,
      },
      {
        i18nKey: 'fest_0709_ties_talk',
        name: 'Palestra com Ties Mellema',
        subtitle: 'Find your own voice (Encontra a tua própria voz)',
        description: null,
        location: 'Salão nobre do Conservatório de Guimarães',
        start: '17:30',
        end: null,
      },
      {
        i18nKey: 'fest_0709_all_sax',
        name: 'All Sax Orchestra — Ensaio geral',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '18:35',
        end: null,
      },
      {
        i18nKey: 'fest_0709_concerto_ties',
        name: 'Concerto CAAA',
        description: 'Ties Mellema e Luís Miguel Trio',
        location: 'CAAA Guimarães',
        start: '21:30',
        end: null,
      },
    ],
  },
  {
    date: '10 de Julho',
    dateLabelKey: 'jul10',
    dateTime: '2026-07-10',
    summary:
      'Dia final com ensaios de preparação, apresentação da APS, concerto do Coro Cordão e concerto final no Teatro Jordão.',
    timeSlots: [
      {
        i18nKey: 'fest_0710_prep',
        name: 'Ensaios de preparação para o concerto final',
        description:
          'Orquestra BE_SAX, Orquestra ALL SAX, Coro Cordão, Stars of the Future, Ensemble de Saxofones da Universidade do Minho',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '09:30',
        end: null,
      },
      {
        i18nKey: 'fest_0710_coffee',
        name: 'Coffe break',
        description: null,
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:00',
        end: null,
      },
      {
        i18nKey: 'fest_0710_aps',
        name: 'Apresentação',
        description: 'Associação Portuguesa do Saxofone',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '11:30',
        end: null,
      },
      {
        i18nKey: 'fest_0710_ensemble_minho',
        name: 'Concerto',
        description:
          'Ensemble de Saxofones da Universidade do Minho — Nuno Silva',
        location: 'Conservatório de Guimarães, Teatro Jordão',
        start: '15:15',
        end: null,
      },
      {
        i18nKey: 'fest_0710_coro',
        name: 'Concerto: Coro Cordão',
        description: null,
        location: 'Bandas de Garagem do Teatro Jordão',
        start: '17:00',
        end: null,
      },
      {
        i18nKey: 'fest_0710_final',
        name: 'Concerto Final',
        description: 'Be_SAX & ALL_SAX, Vento do Norte & Tiago Costa',
        location: 'Teatro Jordão, Guimarães',
        start: '18:00',
        end: null,
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
                <DaySummary day={day} tabbed />
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

function DaySummary({ day, tabbed = false }) {
  const { t } = useDictionary('programa')
  const dateKey = `dates.${day.dateLabelKey}`
  const translatedDate = t(dateKey)
  const dateText = translatedDate !== dateKey ? translatedDate : day.date

  const timeHeading = <time dateTime={day.dateTime}>{dateText}</time>

  return (
    <>
      <h3 className="font-fonty text-3xl font-semibold text-neutral-200">
        {tabbed ? (
          <Tab className="data-selected:not-data-focus:outline-hidden">
            <span className="absolute inset-0" />
            {timeHeading}
          </Tab>
        ) : (
          timeHeading
        )}
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
    resolveActivityI18n(t, slot.i18nKey, 'programDescription', slot.description)

  const getSlotSubtitle = (slot) =>
    slot.subtitle
      ? resolveActivityI18n(t, slot.i18nKey, 'subtitle', slot.subtitle)
      : null

  const getSlotLocation = (slot) =>
    resolveActivityI18n(t, slot.i18nKey, 'location', slot.location)

  const normalizeDetail = (value) =>
    value
      ?.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim() ?? ''

  const formatTimeRange = (start, end) =>
    end ? `${start.trim()} - ${end.trim()}` : start.trim()

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
        const slotSubtitle = getSlotSubtitle(timeSlot)
        const slotDescription = getSlotDescription(timeSlot)
        const slotLocation = getSlotLocation(timeSlot)
        const timeLabel = formatTimeRange(timeSlot.start, timeSlot.end)
        const showSubtitle =
          slotSubtitle &&
          normalizeDetail(slotSubtitle) !== normalizeDetail(slotDescription)
        const showDescription =
          slotDescription &&
          (!slotSubtitle || normalizeDetail(slotSubtitle) !== normalizeDetail(slotDescription))
        return (
        <li
          key={`${timeSlot.i18nKey}-${timeSlot.start}`}
          aria-label={`${slotName}${showSubtitle ? ` — ${slotSubtitle}` : ''} ${showDescription ? `${slotAriaAbout} ${slotDescription}` : ''} ${slotLocation ? `${t('location')} ${slotLocation}` : ''} ${slotAriaAt} ${timeLabel}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-[#5C3A5C]/10" />
          )}
          <h4 className="font-fonty text-2xl font-semibold text-neutral-200">
            {slotName}
          </h4>
          {showSubtitle && (
            <p className="mt-1 font-mono text-base tracking-tight text-neutral-200">
              {slotSubtitle}
            </p>
          )}
          {showDescription && (
            <p className="mt-1 font-mono text-sm tracking-tight text-neutral-300">
              {slotDescription}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-sax-gold">
            <span className="tabular-nums">{timeLabel}</span>
          </p>
          {slotLocation && (
            <p className="mt-2 font-mono text-xs tracking-tight text-neutral-400">
              {slotLocation}
            </p>
          )}
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
