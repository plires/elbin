import styles from './image-circle.module.css'

const ImageCircle = ({ img, username }) => {
  return (
    <div className={`${styles.circle}`}>
      <img
        className={`img-fluid ${styles.staff}`}
        src={img}
        alt={`texto alternativo del usuario: ${username}`}
      />
    </div>
  )
}
export default ImageCircle
