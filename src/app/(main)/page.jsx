import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Programa } from '@/components/Programa'
import { Artistas } from '@/components/Artistas'
import { Parceiros } from '@/components/Parceiros'
import Patrocinadores from '@/components/Patrocinadores'
export default function Home() {
  return (
    <>
      <Hero />

      <Artistas />
      <Programa />
      {/* <Parceiros />
      <Newsletter /> */}
    </>
  )
}
