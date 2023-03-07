import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const modalRootElement = document.querySelector('#modal')
const Modal = ({ children, visible, setVisible }) => {
  const element = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    modalRootElement.appendChild(element)
    return () => {
      modalRootElement.removeChild(element)
    }
  })
  if (visible) {
    return createPortal(
      <div className={styles.modalBG} onClick={setVisible}>
        <div
          className={styles.modalCard}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {children}
        </div>
      </div>,
      element
    )
  } else return null
}

export default Modal
