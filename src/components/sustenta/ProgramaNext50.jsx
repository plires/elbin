import styles from './programa-next-50.module.css'
import logoNext50 from '@/assets/img/sustenta/logo-next-50.webp'
import pdfNext50 from '@/assets/pdf/programa-next-50.pdf'

const ProgramaNext50 = () => {
  return (
    <section className={styles.next50}>
      <div className={styles.overlay} />

      <div className='container'>
        <div data-aos='fade-up' className={styles.content}>
          <span className={styles.eyebrow}>El nuevo programa de Elbin</span>

          <img
            className={styles.logo}
            src={logoNext50}
            alt='Next50 - Longevity Advisory Program'
          />

          <h3 className={`chillaxSemiBold ${styles.title}`}>
            Tu próxima etapa empieza hoy.
          </h3>

          <p className={styles.text}>
            <span className={styles.highlight}>Sumate a Next50</span> y
            convertí tu trayectoria en tu mayor ventaja competitiva.
          </p>

          <div className={styles.ctas}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href='https://docs.google.com/forms/d/e/1FAIpQLSeC2HtqPDlK-rxAtwLMEuSTOxBoVEl7vHpGsok1SBrpOzHhbw/viewform'
              target='_blank'
              rel='noopener noreferrer'
            >
              Postulate
            </a>
            <a
              className={`${styles.btn} ${styles.btnOutline}`}
              href={pdfNext50}
              target='_blank'
              rel='noopener noreferrer'
            >
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramaNext50
