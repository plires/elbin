import { Link } from 'react-router-dom'
import { getLink } from '@/utils/dataUtils.js'
import styles from './card-feature.module.css'

const CardFeature = ({ item, type = 'large', extra = null }) => {
  {
    const content = item.is_link ? (
      <Link
        className='transition'
        to={getLink(item.type_link)}
        target='_blank'
        rel='noopener'
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></Link>
    ) : (
      <p
        className={`${styles.description}`}
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></p>
    )

    if (type === 'large') {
      return (
        <article>
          <div className={`${styles.content} ${styles.large}`}>
            <div className={`${styles.content_icon}`}>
              <img src={item.icon} alt={`icono de ${item.description}`} />
            </div>

            {item.title && <h3>{item.title}</h3>}

            {content}
            {extra && (
              <img
                className={`${styles.extra}`}
                src={extra.img}
                alt={extra.alt}
              />
            )}
          </div>
        </article>
      )
    } else {
      return (
        <article>
          <div className={`${styles.content} ${styles.small}`}>
            <div className={`${styles.content_icon}`}>
              <img src={item.icon} alt={`icono de ${item.description}`} />
            </div>

            {item.title && <h3>{item.title}</h3>}

            {content}
          </div>
        </article>
      )
    }
  }
}

export default CardFeature
