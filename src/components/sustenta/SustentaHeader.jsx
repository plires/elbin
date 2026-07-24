import styles from './sustenta-header.module.css'
import header from '@/assets/img/sustenta/header-sustenta.webp'

const SustentaHeader = () => {
  return (
    <section className={styles.sustenta_header}>
      <img
        className={styles.img_header}
        src={header}
        alt='equipo de Elbin trabajando en Elbin Sustenta'
      />
      <div className={styles.bg} />
      <div data-aos='fade-up' className={styles.content_data}>
        <h1 className='chillaxSemiBold'>Elbin Sustenta</h1>
        <p className={`chillaxSemiBold ${styles.subtitle}`}>
          Iniciativas para proteger el futuro, desde el presente.
        </p>
        <p className={styles.text}>
          Cuando pensamos en protección, solemos pensar en lo que hacemos cuando
          algo sucede. Pero existe otra forma de proteger, la que ayuda a
          anticiparse, planificar y construir mejores posibilidades para el
          futuro. Elbin Sustenta es el ecosistema que reúne las iniciativas de
          impacto social, económico y sustentable que impulsamos desde Elbin,
          porque el futuro no depende solo de reaccionar frente a los cambios,
          también depende de prepararnos para ellos.
        </p>
      </div>
    </section>
  )
}

export default SustentaHeader
