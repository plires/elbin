import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './trayectory-card.module.css'

const TrayectoryCard = ({ item }) => {
  return (
    <article
      data-aos='fade-up'
      className={`${styles.content_article}`}
      key={item.id}
    >
      <p className={`chillax ${styles.year}`}>{item.year || <Skeleton />}</p>
      <p className={`${styles.descripction}`}>
        {item.description || <Skeleton count={4} />}
      </p>
    </article>
  )
}
export default TrayectoryCard
