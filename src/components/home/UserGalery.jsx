import ImageCircle from '@/components/commons/ImageCircle'
import styles from './user-galery.module.css'

const UserGalery = ({ comillas, description, userImg, userName }) => {
  return (
    <div className={`${styles.user}`}>
      <img
        className={`img-fluid ${styles.comillas}`}
        src={comillas}
        alt={`comillas del usuario: ${userName}`}
      />
      <p className={`${styles.description}`}>{description}</p>
      <div className={`${styles.content}`}>
        <ImageCircle img={userImg} alt={userName} />
        <h4>{userName}</h4>
      </div>
    </div>
  )
}
export default UserGalery
