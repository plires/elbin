import Seguro from '@/components/home/Seguro'
import { getSeguros } from '@/utils/dataUtils.js'

import styles from './nuestros-seguros.module.css'

const NuestrosSeguros = () => {
  const seguros = getSeguros('seguros')
  // const categoriesSeguros = Object.groupBy(seguros, ({ category }) => category) // Para navegadores mas modernos

  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      ;(rv[x[key]] = rv[x[key]] || []).push(x)
      return rv
    }, {})
  }

  const categoriesSeguros = groupBy(seguros, 'category')

  return (
    <section className={`${styles.nuestros_seguros} container`}>
      <div data-aos='fade-up' className='row'>
        <div className='col-md-12'>
          <h2 className='chillax'>Nuestros seguros</h2>
        </div>
      </div>

      <div className='accordion accordion-flush' id='accordionSeguro'>
        <div data-aos='fade-up' className='row'>
          <div className={`${styles.first_column} col-md-6`}>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>Seguros personales</h3>
              </div>

              {categoriesSeguros['SEGUROS PERSONALES'].map(item => (
                <Seguro key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div data-aos='fade-up' className={`${styles.last_column} col-md-6`}>
            <div className='row'>
              <div className='col-lg-12'>
                <h3>Seguros corporativos</h3>
              </div>
              {categoriesSeguros['SEGUROS CORPORATIVOS'].map(item => (
                <Seguro key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestrosSeguros
