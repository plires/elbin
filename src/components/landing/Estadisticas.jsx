import ItemLanding from '@/components/landing/ItemLanding.jsx'
import { getItemsLanding } from '@/utils/dataUtils.js'

import styles from './estadisticas.module.css'

const Estadisticas = () => {
  const items = getItemsLanding('items')

  return (
    <section className={styles.estadisticas}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 data-aos='fade-up' className='chillax'>
              Un negocio con potencial y una carrera con futuro.
            </h2>
            <h4 data-aos='fade-up' className='text-center'>
              El mercado asegurador argentino tiene todavía muchísimo por
              crecer:
            </h4>
          </div>
        </div>

        <div className='row'>
          {items.map(
            item =>
              item.type === 'estadistica' && (
                <ItemLanding key={item.id} col='col-md-4' item={item} />
              ),
          )}
        </div>
      </div>
    </section>
  )
}
export default Estadisticas
