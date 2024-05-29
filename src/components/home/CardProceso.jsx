import styles from './card-proceso-blindaje.module.css'

const CardProceso = ({ title, description }) => {
  return (
    <article data-aos='fade-up' className={`col-md-4 ${styles.group}`}>
      <div className={`${styles.content}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
export default CardProceso
