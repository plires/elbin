import { Link } from 'react-router-dom'
import styles from './button-red.module.css'
const ButtonRed = ({ className = '', to, text = 'VER MÁS' }) => {
  return (
    <Link
      data-aos='fade-up'
      to={to}
      className={`btn transition ${styles.btn_red} ${className}`}
    >
      {text}
    </Link>
  )
}
export default ButtonRed
