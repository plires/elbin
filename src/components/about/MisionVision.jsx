import CardFeature from '@/components/home/CardFeature'
import iconMujer from '@/assets/img/about/mujeres-onu.svg'
import selloMujer from '@/assets/img/about/sello-mujer.svg'
import { getFeaturesAbout } from '@/utils/dataUtils.js'

import styles from './mision-vision.module.css'

const MisionVision = () => {
  const data = getFeaturesAbout('features')

  const dataExtraDistincion = {
    img: iconMujer,
    alt: 'icono mujeres onu',
    img_sello: selloMujer,
    alt_sello: 'sello mujer buenos aires',
  }

  return (
    <section className={`container ${styles.mision_vision}`}>
      <div className='row'>
        {data.map(item => {
          {
            if (item.h2 === 'Distinción') {
              return (
                <div data-aos='fade-up' key={item.id} className='col-md-12'>
                  <h2 className='chillax'>{item.h2}</h2>
                  <CardFeature extra={dataExtraDistincion} item={item} />
                </div>
              )
            } else {
              return (
                <div data-aos='fade-up' key={item.id} className='col-md-6'>
                  <h2 className='chillax'>{item.h2}</h2>
                  <CardFeature item={item} />
                </div>
              )
            }
          }
        })}
      </div>
    </section>
  )
}
export default MisionVision
