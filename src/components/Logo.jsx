import Image from 'next/image'
import logoImage from '@/images/logo.jpg'

export function Logo(props) {
  return (
    <Image
      src={logoImage}
      alt="Guimarães International Saxophone Festival"
      className={props.className}
      height={60}
      width={200}
      priority
      unoptimized
      style={{ objectFit: 'contain' }}
      {...props}
    />
  )
}
