import styles from './header-seguros.module.css'

import semiCirculo from '@/assets/img/seguros/medio-circulo.svg'

const HeaderSeguros = ({ title, description }) => {
  return (
    <section className={`${styles.header_seguros}`}>
      <div className='container'>
        <div className={`${styles.content_data}`}>
          <h1 className='chillax'>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={`${styles.content_svg}`}>
          <img
            className={`img-fluid ${styles.semi_circulo}`}
            src={semiCirculo}
            alt='semicirculo en header'
          />
        </div>
      </div>
    </section>
  )
}

export default HeaderSeguros
