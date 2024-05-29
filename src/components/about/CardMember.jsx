import ImageCircle from '@/components/commons/ImageCircle'

import styles from './card-member.module.css'

const CardMember = ({ item }) => {
  return (
    <article data-aos='fade-up' className={`${styles.content}`}>
      <ImageCircle
        img={item.img}
        alt={`imagen del staff en modal: ${item.name}`}
      />
      <h3>{item.name}</h3>
      <h4>{item.cargo}</h4>
    </article>
  )
}

export default CardMember
