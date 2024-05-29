import CardFeature from '@/components/home/CardFeature'
import styles from './features.module.css'

import { getFeaturesHome } from '@/utils/dataUtils.js'

const Features = () => {
  const data = getFeaturesHome('features')

  return (
    <section className={`container ${styles.features}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Nos caracterizamos por
          </h2>
        </div>
      </div>
      <div className='row'>
        {data.map(item => {
          return (
            <div
              data-aos='fade-up'
              key={item.id}
              className={`col-sm-6 col-md-4 ${styles.content_article}`}
            >
              <CardFeature item={item} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
