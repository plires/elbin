import { Link } from 'react-router-dom'
import styles from './whatsapp.module.css'

const ContactoWhatsapp = () => {
  return (
    <section className={`${styles.section_whatsapp}`}>
      <p>Si quieres conocer más sobre nuestros seguros</p>
      <Link
        to={import.meta.env.VITE_LINK_TO_WHATSAPP}
        target='_blank'
        rel='noopener'
        className={`btn transition ${styles.btn_whatsapp}`}
      >
        CONTACTAR A UN ASESOR
      </Link>
    </section>
  )
}

export default ContactoWhatsapp
