'use client'

import Link from 'next/link'
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Logo } from '@/components/Logo'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/shadcn/tooltip'
import { Dock, DockIcon } from '@/components/ui/dock'

const navegacao = {
  principal: [
    {
      nome: 'Notícias',
      href: '/noticias',
    },
    {
      nome: 'Termos',
      href: 'https://www.guimaraessaxfest.com/masterclass/termos.php',
    },
    {
      nome: 'Privacidade',
      href: 'https://www.guimaraessaxfest.com/masterclass/privacidade.php',
    },
    {
      nome: 'Cookies',
      href: 'https://www.guimaraessaxfest.com/masterclass/cookies.php',
    },
    { nome: 'Livro de Reclamações', href: 'https://www.livroreclamacoes.pt/' },
    { nome: 'Contactos', href: '/contactos' },
  ],
}

export default function Rodape() {
  return (
    <>
      {/* Divider */}
      <div className="relative bg-[#000000] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-sax-gold to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="bg-[#1a0f1a]"> */}
      <footer className="bg-[#000000]">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="mb-12 flex justify-center">
            <Logo
              size="sm"
              text="Guimarães International Saxophone Festival * 2026 * "
              className=""
              linkHref="/"
              linkAriaLabel="Guimarães International Saxophone Festival - Página inicial"
            />
          </div>
          <nav
            aria-label="Rodapé"
            className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 font-mono text-sm/6"
          >
            {' '}
            {navegacao.principal.map((item) => (
              <a
                key={item.nome}
                href={item.href}
                className="text-neutral-300 transition-colors hover:text-sax-gold"
              >
                {item.nome}
              </a>
            ))}
          </nav>
          <div className="mt-16 flex justify-center gap-x-10">
            <RedesSociais />
          </div>
          <p className="mt-10 text-center font-mono text-sm/6 text-neutral-400">
            {new Date().getFullYear()} &copy; Guimarães International Saxophone
            Festival. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}

const Icons = {
  calendar: (props) => <CalendarIcon {...props} />,
  email: (props) => <MailIcon {...props} />,

  facebook: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  ),

  instagram: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  ),
}
const DATA = {
  navbar: [{ href: '#', icon: HomeIcon, label: 'Home' }],
  contact: {
    social: {
      Instagram: {
        name: 'Instagram',
        url: '#',
        icon: Icons.instagram,
      },

      Facebook: {
        name: 'Facebook',
        url: '#',
        icon: Icons.facebook,
      },
    },
  },
}
function RedesSociais() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {/* {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))} */}

          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name} className="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
