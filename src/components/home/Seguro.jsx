import ButtonRed from '@/components/commons/ButtonRed'
import styles from './seguro.module.css'
import 'bootstrap/dist/js/bootstrap.js'

const Seguro = ({ item }) => {
  var claseExtra = ''

  if (item.firstElement) claseExtra = styles.first

  return (
    <article className='col-lg-12'>
      <div className={`${styles.accordion_custom} accordion-item`}>
        <h2 className={`accordion-header ${claseExtra}`}>
          <button
            className={`transition accordion-button collapsed`}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#${item.id}`}
            aria-expanded='false'
            aria-controls={item.id}
          >
            <div className={`${styles.number}`}>{item.number}</div>
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </button>
        </h2>
        <div
          id={item.id}
          className='accordion-collapse collapse'
          data-bs-parent='#accordionSeguro'
        >
          <div className={`accordion-body ${styles.text_description}`}>
            <p>{item.description}</p>
            <ButtonRed to={item.link} text='LEER MÁS' />
          </div>
        </div>
      </div>
    </article>
  )
}

export default Seguro
