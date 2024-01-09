import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export interface IUseModalReturn {
  openModal: () => void
  closeModal: () => void
  setContent: (Content: React.ReactNode) => void
}

const useModal = (): IUseModalReturn => {
  const [modal, setModal] = useState<HTMLDialogElement | null>(null)

  useEffect(() => {
    setModal(document.querySelector('dialog'))
  }, [])

  const openModal = (): void => {
    modal?.showModal()
  }

  const closeModal = (): void => {
    modal?.close()
  }

  const setContent = (Content: React.ReactNode): React.ReactPortal | null => (modal !== null) ? createPortal(Content, modal) : null

  return {
    openModal,
    closeModal,
    setContent
  }
}

export default useModal
