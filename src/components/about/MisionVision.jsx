import CardFeature from '@/components/home/CardFeature'
import { getFeaturesAbout } from '@/utils/dataUtils.js'

import styles from './mision-vision.module.css'

const MisionVision = () => {
  const data = getFeaturesAbout('features')

  return (
    <section className={`container ${styles.mision_vision}`}>
      <div className='row'>
        {data.map(item => {
          return (
            <div data-aos='fade-up' key={item.id} className='col-md-6'>
              <h2 className='chillax'>{item.h2}</h2>
              <CardFeature item={item} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default MisionVision
