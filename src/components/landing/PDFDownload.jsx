import { useEffect, useCallback } from 'react'
import recurso from '@/assets/pdf/recurso.pdf'
import styles from './pdf-download.module.css'

const PDFDownload = ({ onClose }) => {
  // Cerrar con tecla ESC
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') onClose?.()
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    // bloquear scroll detrás del modal
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [handleKeyDown])

  // Cerrar al clickear el fondo
  const handleBackdropClick = e => {
    // Solo cerrar si el clic es exactamente sobre el fondo, no el contenido
    if (e.target === e.currentTarget) onClose?.()
  }

  return (
    <section
      className={styles.overlay}
      onClick={handleBackdropClick}
      role='dialog'
      aria-modal='true'
      aria-labelledby='pdf-download-title'
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button
          type='button'
          className={styles.close}
          aria-label='Cerrar'
          onClick={onClose}
        >
          ×
        </button>
        <h3 id='pdf-download-title' className={styles.title}>
          Gracias por tu contacto
        </h3>

        <p>
          En breve nos contactaremos con vos. <br /> Mientras tanto, te
          regalamos un recurso en PDF para que puedas descargar.
        </p>

        <a className={styles.downloadBtn} href={recurso} download='recurso.pdf'>
          DESCARGAR PDF
        </a>

        <p className={styles.helperText}>
          Presioná <kbd>Esc</kbd> para cerrar, o hacé clic fuera del modal.
        </p>
      </div>
    </section>
  )
}

export default PDFDownload
