import TrayectoryCard from '@/components/about/TrayectoryCard'

import { getTrayectoria } from '@/utils/dataUtils.js'

import styles from './trayectoria.module.css'

const Trayectoria = () => {
  const trayectory = getTrayectoria('trayectoria')

  return (
    <section className={`container ${styles.trayectoria}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Nuestra trayectoria
          </h2>
        </div>
      </div>

      <div className='row'>
        <div className={`col-md-12 ${styles.content}`}>
          {trayectory.map(item => (
            <TrayectoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Trayectoria
