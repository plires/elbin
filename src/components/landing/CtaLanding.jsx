import Button from '@/components/commons/ButtonApp.jsx'
import { scrollToForm } from '@/utils/dataUtils.js'
import styles from './cta-landing.module.css'

const CtaLanding = () => {
  return (
    <section className={`${styles.ctaLanding} container`}>
      <div className='row'>
        <div className='col-md-12'>
          <p data-aos='fade-up' className='chillaxMedium'>
            Empezá tu carrera como <br />
            <span className='chillaxBold'>
              Productor de Seguros en Elbin,
            </span>{' '}
            <br />
            Agencia acreditada en Zurich.
          </p>
          <Button
            className={styles.btn}
            onClick={() => scrollToForm({ offset: 200, duration: 500 })}
            variant='primary'
            size='md'
          >
            APLICÁ AHORA
          </Button>
        </div>
      </div>
    </section>
  )
}
export default CtaLanding
