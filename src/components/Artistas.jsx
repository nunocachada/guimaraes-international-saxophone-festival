'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import henkVanTwillertImage from '@/images/avatars/henk-van-twillert.jpg'
import tiesMellemmaImage from '@/images/Ties_Mellema.webp'
import nunoSilvaImage from '@/images/nuno_silva.jpg'
import nicolasArsinejevicImage from '@/images/Nicolas_Arsenijevic.webp'

const days = [
  {
    name: 'Dia de Abertura',
    date: '7 de Julho',
    dateTime: '2026-07-07',
    artistas: [
      {
        name: 'Henk Van Twillert',
        role: 'HOLANDA',
        image: henkVanTwillertImage,
      },
      {
        name: 'Nicolas Arsinejevic',
        role: 'CNSMP, França',
        image: nicolasArsinejevicImage,
      },
      {
        name: 'Ties Mellemma',
        role: 'Fontys Arts University, Holanda',
        image: tiesMellemmaImage,
      },
      {
        name: 'Nuno Silva',
        role: 'Breda Conservatory, Portugal',
        image: nunoSilvaImage,
      },
    ],
  },
  {
    name: 'Concertos & Masterclasses',
    date: '8 de Julho',
    dateTime: '2026-07-08',
    artistas: [
      {
        name: 'Nicolas Arsinejevic',
        role: 'CNSMP, França',
        image: nicolasArsinejevicImage,
      },
      {
        name: 'Ties Mellemma',
        role: 'Fontys Arts University, Holanda',
        image: tiesMellemmaImage,
      },
      {
        name: 'Nuno Silva',
        role: 'Breda Conservatory, Portugal',
        image: nunoSilvaImage,
      },
    ],
  },
  {
    name: 'Workshops & Masterclasses',
    date: '9 de Julho',
    dateTime: '2026-07-09',
    artistas: [
      {
        name: 'Nicolas Arsinejevic',
        role: 'CNSMP, França',
        image: nicolasArsinejevicImage,
      },
      {
        name: 'Henk Van Twillert',
        role: 'Holanda',
        image: henkVanTwillertImage,
      },
      {
        name: 'Ties Mellemma',
        role: 'Fontys Arts University, Holanda',
        image: henkVanTwillertImage,
      },
      {
        name: 'Nuno Silva',
        role: 'Breda Conservatory, Portugal',
        image: nunoSilvaImage,
      },
    ],
  },
  {
    name: 'Encerramento',
    date: '10 de Julho',
    dateTime: '2026-07-10',
    artistas: [
      {
        name: 'Nicolas Arsinejevic',
        role: 'CNSMP, França',
        image: nicolasArsinejevicImage,
      },
      {
        name: 'Ties Mellemma',
        role: 'Fontys Arts University, Holanda',
        image: tiesMellemmaImage,
      },
      {
        name: 'Nuno Silva',
        role: 'Breda Conservatory, Portugal',
        image: nunoSilvaImage,
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
      className="py-20 sm:py-32"
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
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-[#5C3A5C]/30 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-4 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-[#A87B3F] stroke-[#A87B3F]'
                            : 'fill-transparent stroke-[#5C3A5C]/40',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-[#A87B3F]'
                              : 'text-neutral-400',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-neutral-200"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.artistas.map((artista, artistaIndex) => (
                  <div key={artistaIndex}>
                    <div className="group relative h-70 transform overflow-hidden rounded-4xl">
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
                        style={{ clipPath: `url(#${id}-${artistaIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover grayscale transition duration-300 group-hover:scale-110"
                          src={artista.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-mono text-xl font-bold tracking-tight text-[#A87B3F]">
                      {artista.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-neutral-400">
                      {artista.role}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
