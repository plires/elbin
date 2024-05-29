import styles from './proceso-blindaje.module.css'
import CardProceso from '@/components/home/CardProceso'
import { getProcesoBlindaje } from '@/utils/dataUtils.js'

const ProcesoBlindaje = () => {
  const procesosBlindaje = getProcesoBlindaje('procesoblindaje')
  return (
    <section className={`${styles.proceso_blindaje} container`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Proceso de blindaje
          </h2>
        </div>
      </div>
      <div className='row'>
        {procesosBlindaje.map(item => (
          <CardProceso
            key={item.id}
            data-aos='fade-up'
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ProcesoBlindaje
