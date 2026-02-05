'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from '@/components/ui/animated-modal'

import Image from 'next/image'
import saxImage from '@/images/sax.svg'
import { cn } from '@/lib/utils'

const CancelButton = () => {
  const { setOpen } = useModal()
  return (
    <button
      onClick={() => setOpen(false)}
      className="w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white"
    >
      Fechar
    </button>
  )
}

export function Formulario({ className }) {
  return (
    <div className={cn('flex items-center justify-start font-mono', className)}>
      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-sax-gold text-white hover:bg-sax-gold-dark">
          <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
            Participar
          </span>
          <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0">
            <Image src={saxImage} alt="Saxophone" width={24} height={24} />
          </div>
        </ModalTrigger>
        <ModalBody className="overflow-y-auto border border-white bg-black">
          <ModalContent className="overflow-y-auto px-0">
            <div className="flex items-center justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSca9Ua7UfoGovlXvsgmRoQG-fHPzG-Smt0UZ3_L84DTpWY-kg/viewform?embedded=true"
                className="min-h-[835px] w-full sm:min-h-[900px]"
                title="Formulário de Inscrição"
                style={{ border: 'none' }}
              >
                A carregar…
              </iframe>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <CancelButton />
            {/* <button className="w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white dark:bg-white dark:text-black">
              Book Now
            </button> */}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}
