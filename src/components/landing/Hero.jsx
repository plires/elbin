import Button from '@/components/commons/ButtonApp.jsx'
import { scrollToForm } from '@/utils/dataUtils.js'

import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div data-aos='fade-up'>
        <h1 className='chillaxSemiBold'>
          Construí tu carrera como <br />
          <span className='chillaxBold'>
            Productor de Seguros junto a Elbin,
          </span>
          <br />
          <span className='chillaxMedium'>
            Agencia acreditada en Zurich Int Life.
          </span>
        </h1>
        <ul className={styles.customList}>
          <li>
            En Argentina, la mayoría de las personas todavía no tiene un seguro
            de vida o retiro.
          </li>
          <li>
            Con Elbin podés aprovechar esta oportunidad para empezar{' '}
            <span>
              una carrera independiente, flexible y con respaldo internacional.
            </span>
          </li>
          <li>
            <span>
              Una profesión que te permite generar ingresos crecientes y crecer
              profesionalmente.
            </span>
          </li>
        </ul>
        <Button
          className={styles.btn}
          onClick={() => scrollToForm({ offset: 400, duration: 500 })}
          variant='primary'
          size='md'
        >
          APLICÁ AHORA
        </Button>
      </div>
    </section>
  )
}
export default Hero
