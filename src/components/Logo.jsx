import Image from 'next/image'
import logoImage from '@/images/logo.jpg'
import { TextCircle } from '@/components/text-circle'

export function Logo(props) {
  return (
    // <Image
    //   src={logoImage}
    //   alt="Guimarães International Saxophone Festival"
    //   className={props.className}
    //   height={60}
    //   width={200}
    //   priority
    //   unoptimized
    //   style={{ objectFit: 'contain' }}
    //   {...props}
    // />
    <TextCircle
      text="Guimarães International Saxophone Festival * 2026 * "
      className="max-h-[100px] font-sans text-[8px] uppercase"
    />
  )
}
