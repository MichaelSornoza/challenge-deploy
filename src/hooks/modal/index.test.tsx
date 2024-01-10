import '@testing-library/jest-dom'

import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useModal from '.'

describe('useModal Hook', () => {
  beforeEach(() => {
    window.HTMLDialogElement.prototype.showModal = jest.fn()
    window.HTMLDialogElement.prototype.close = jest.fn()
  })

  it('opens and closes the modal', () => {
    const dialog = document.createElement('dialog')
    document.body.appendChild(dialog)

    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.openModal()
      result.current.closeModal()
    })

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.HTMLDialogElement.prototype.showModal).toHaveBeenCalled()
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(window.HTMLDialogElement.prototype.close).toHaveBeenCalled()

    document.body.removeChild(dialog)
  })

  it('sets content in the modal', () => {
    const dialog = document.createElement('dialog')
    document.body.appendChild(dialog)

    const { result } = renderHook(() => useModal())

    act(() => {
      const content = <div>Test Content</div>
      result.current.setContent(content)
    })

    document.body.removeChild(dialog)
  })
})
