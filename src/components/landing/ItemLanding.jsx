import { getImageURLFromLanding } from '@/utils/dataUtils.js'
import styles from './item-landing.module.css'

const ItemLanding = ({ col, item }) => {
  return (
    <article
      data-aos='fade-up'
      className={`${col} ${styles.item} ${item.extraCss ? styles[item.extraCss] : ''}`}
    >
      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: item.description }} />
        <span className={styles.imgWrap}>
          <img src={getImageURLFromLanding(item.icon)} alt={item.alt} />
        </span>
      </div>
    </article>
  )
}
export default ItemLanding
