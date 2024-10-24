import CardMember from '@/components/about/CardMember'
import { getLideresEquipo } from '@/utils/dataUtils.js'

import styles from './lideres-equipo.module.css'

const LideresEquipo = () => {
  const lideres = getLideresEquipo('lideres')

  return (
    <section className={`container ${styles.lideres_equipo}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Líderes de equipo
          </h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          <div className={`row ${styles.content_lideres}`}>
            {lideres.map(item => (
              <div key={item.id} className='col-6 col-md-4'>
                <CardMember item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LideresEquipo
