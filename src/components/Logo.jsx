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
      text="Guimarães Sax Fest * 7 a 10 julho * "
      className="t max-h-[100px] text-xs uppercase"
    />
  )
}
