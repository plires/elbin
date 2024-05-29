import CardSeguro from '@/components/seguros/CardSeguro'
import { getSeguros } from '@/utils/dataUtils.js'

import styles from './seguros-category.module.css'

const SegurosCategory = () => {
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
    <section className={`container ${styles.seguros}`}>
      {Object.keys(categoriesSeguros).map((item, index) => (
        <div key={index} className={`row ${styles.row}`}>
          <div className='col-md-12'>
            <h3>{item}</h3>
          </div>

          <div className='col-lg-10 offset-lg-1'>
            <div className='row'>
              {categoriesSeguros[item].map(item => (
                <div key={item.id} className='col-sm-4'>
                  <CardSeguro item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default SegurosCategory
