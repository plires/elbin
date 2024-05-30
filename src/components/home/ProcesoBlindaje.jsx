import styles from './proceso-blindaje.module.css'
// import CardProceso from '@/components/home/CardProceso'
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
        <div className='col-md-12'>
          <p>
            En Elbin trabajamos constantemente en ayudar a nuestros/as clientes
            a planificar de manera sana diferentes situaciones financieras. Es
            por esto que nuestro proceso de blindaje es tan importante para
            nosotros/as. Por medio de este método nos aseguramos de que las
            personas que confían en el asesoramiento que brindamos, puedan
            conservar a lo largo de sus vidas, las de sus familias y empresas,
            todo lo construido hasta el momento. La mayor motivación que tenemos
            es blindar sus patrimonios, objetivos y sueños para que pase lo que
            pase, nada modifique lo planeado.
          </p>
        </div>
        {/* {procesosBlindaje.map(item => (
          <CardProceso
            key={item.id}
            data-aos='fade-up'
            title={item.title}
            description={item.description}
          />
        ))} */}
      </div>
    </section>
  )
}

export default ProcesoBlindaje
