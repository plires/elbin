import ItemLanding from '@/components/landing/ItemLanding.jsx'
import { getItemsLanding } from '@/utils/dataUtils.js'

import styles from './caracteristicas.module.css'

const Caracteristicas = () => {
  const items = getItemsLanding('items')

  return (
    <section className={styles.caracteristicas}>
      <div className={styles.flechasIzq}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 data-aos='fade-up' className='chillaxMedium'>
              Por eso, sumarte hoy como Productor de Seguros <br />
              <span>puede marcar la diferencia.</span> <br />
              <br />
              En Elbin lo hacemos posible con:
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-8'>
            <div className='row contentSpecial'>
              {items.map(
                item =>
                  item.type === 'caracteristica' && (
                    <ItemLanding key={item.id} col='col-md-6' item={item} />
                  ),
              )}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row last'>
              {items.map(
                item =>
                  item.type === 'caracteristica-long' && (
                    <ItemLanding key={item.id} col='col-md-12' item={item} />
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flechasDer}></div>
    </section>
  )
}
export default Caracteristicas
