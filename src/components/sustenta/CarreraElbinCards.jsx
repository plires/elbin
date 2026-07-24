import iconIndependencia from '@/assets/img/sustenta/independendencia.webp'
import iconPlanCarrera from '@/assets/img/sustenta/plan-carrera-escalable.webp'
import iconMentoria from '@/assets/img/sustenta/mentoria.webp'
import iconReconocimientos from '@/assets/img/sustenta/reconocimientos.webp'
import styles from './carrera-elbin-cards.module.css'

const CarreraElbinCards = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={`chillax ${styles.heading}`}>
        Construí tu carrera junto a Elbin
      </h3>
      <p className={styles.subheading}>
        Sumate hoy y marcá la diferencia, nosotros te ayudamos a hacerlo
        posible con:
      </p>

      <div className={styles.grid}>
        <div data-aos='fade-up' className={`${styles.card} ${styles.card1}`}>
          <p className={styles.cardText}>
            <strong>
              Independencia para combinarlo con tu profesión actual
            </strong>{' '}
            o iniciar una nueva carrera.
          </p>
          <div className={styles.iconWrap}>
            <img
              className={styles.icon}
              src={iconIndependencia}
              alt='Independencia'
            />
          </div>
        </div>

        <div data-aos='fade-up' className={`${styles.card} ${styles.card2}`}>
          <p className={styles.cardText}>
            <strong>Un plan de carrera escalable junto a Zurich Int Life.</strong>
          </p>
          <p className={styles.cardSubtext}>
            5 etapas de productor, 3 de líder y 2 de agencia.
          </p>
          <div className={styles.iconWrap}>
            <img
              className={styles.icon}
              src={iconPlanCarrera}
              alt='Plan de carrera escalable'
            />
          </div>
        </div>

        <div data-aos='fade-up' className={`${styles.card} ${styles.card3}`}>
          <p className={styles.cardText}>
            <strong>Mentoría y acompañamiento permanente:</strong> Inducción,
            líderes de equipo, capacitaciones cada 15 días, encuentros
            globales de Agencia, capacitaciones de Zurich coaching
            individual.
          </p>
          <div className={styles.iconWrap}>
            <img
              className={styles.icon}
              src={iconMentoria}
              alt='Mentoría y acompañamiento'
            />
          </div>
        </div>

        <div data-aos='fade-up' className={`${styles.card} ${styles.card4}`}>
          <p className={styles.cardTitle}>Reconocimientos únicos:</p>
          <p className={styles.cardText}>
            <strong>Convenciones internacionales de Zurich,</strong> últimos
            destinos: España, Canadá, Bélgica y Holanda.
          </p>
          <p className={styles.cardText}>
            <strong>Viajes propios de Elbin,</strong> últimos destinos:
            Mendoza, El Calafate y San Martín de los Andes.
          </p>
          <p className={styles.cardText}>
            <strong>Incentivos mensuales</strong> con juegos interactivos y
            encuentros de relacionamiento.
          </p>
          <div className={styles.iconWrap}>
            <img
              className={styles.icon}
              src={iconReconocimientos}
              alt='Reconocimientos únicos'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarreraElbinCards
