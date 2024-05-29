import { Link } from 'react-router-dom'
import styles from './card-seguro.module.css'

const CardSeguro = ({ item }) => {
  return (
    <article className={`transition ${styles.content}`}>
      <Link to={item.link}>
        <img className='img-fluid' src={item.icon} alt={item.name} />
        <p className={`transition ${styles.name}`}>{item.name}</p>
      </Link>
    </article>
  )
}

export default CardSeguro
