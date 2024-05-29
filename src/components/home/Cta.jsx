import styles from './cta.module.css'

import ButtonRed from '@/components/commons/ButtonRed'

const Cta = () => {
  return (
    <section data-aos='fade-up' className={`${styles.cta} container`}>
      <div className='row'>
        <div className={`col-md-12 ${styles.content}`}>
          <span>Si quieres conocer más sobre Elbin</span>
          <ButtonRed to='/contacto' text='VER MÁS' />
        </div>
      </div>
    </section>
  )
}

export default Cta
