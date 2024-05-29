import styles from './about-header.module.css'
import header from '@/assets/img/about/header-about.jpg'
import flecha from '@/assets/img/flecha-roja.svg'
import circles from '@/assets/img/vector-circulos.svg'

const AboutHeader = () => {
  return (
    <section className={`${styles.about_header}`}>
      <img
        className={`img-fluid ${styles.img_header}`}
        src={header}
        alt='equipo elbin'
      />
      <div className={`${styles.content_data}`}>
        <img
          className={`${styles.circles}`}
          src={circles}
          alt='circulos en vectores'
        />
        <img className={`${styles.flecha}`} src={flecha} alt='flecha roja' />
        <h1 data-aos='fade-up' className='chillax'>
          Tranformamos potenciales en grandes profesionales
        </h1>
      </div>
    </section>
  )
}

export default AboutHeader
