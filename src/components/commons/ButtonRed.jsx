import { Link } from 'react-router-dom'
import styles from './button-red.module.css'
const ButtonRed = ({ to, text = 'VER MÁS' }) => {
  return (
    <Link to={to} className={`btn transition ${styles.btn_red}`}>
      {text}
    </Link>
  )
}
export default ButtonRed
