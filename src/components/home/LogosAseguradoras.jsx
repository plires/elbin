import styles from './logos-aseguradoras.module.css'
import logo1 from '@/assets/img/home/logo-1.jpg'
import logo2 from '@/assets/img/home/logo-2.jpg'
import logo3 from '@/assets/img/home/logo-3.jpg'
import logo4 from '@/assets/img/home/logo-4.jpg'
import logo5 from '@/assets/img/home/logo-5.jpg'
import logo6 from '@/assets/img/home/logo-6.jpg'
import logo7 from '@/assets/img/home/logo-7.jpg'
import logo8 from '@/assets/img/home/logo-8.jpg'
import logo9 from '@/assets/img/home/logo-9.jpg'

const LogosAseguradoras = () => {
  return (
    <section
      data-aos='fade-up'
      className={`${styles.logos_aseguradoras} container`}
    >
      <div className='row'>
        <div className={`col-md-12`}>
          <h2 className='chillax'>Aseguradoras asociadas</h2>
        </div>
      </div>

      <div className='row'>
        <div className={`col-md-12 ${styles.featured}`}>
          <img
            className={`img-fluid ${styles.logo_large}`}
            src={logo1}
            alt='logo zurich'
          />
        </div>
      </div>

      <div className={`${styles.content}`}>
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo7}
          alt='logo 7'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo2}
          alt='logo 2'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo3}
          alt='logo 3'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo9}
          alt='logo 9'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo8}
          alt='logo 8'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo4}
          alt='logo 4'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo5}
          alt='logo 5'
        />
        <img
          className={`img-fluid ${styles.logo_small}`}
          src={logo6}
          alt='logo 6'
        />
      </div>
    </section>
  )
}

export default LogosAseguradoras
