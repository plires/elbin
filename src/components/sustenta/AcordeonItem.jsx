import styles from './acordeon-item.module.css'
import 'bootstrap/dist/js/bootstrap.js'

const AcordeonItem = ({ item, defaultOpen }) => {
  return (
    <div className={`${styles.item} accordion-item`}>
      <h4 className='accordion-header'>
        <button
          className={`transition accordion-button ${styles.button} ${
            defaultOpen ? '' : 'collapsed'
          }`}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${item.id}`}
          aria-expanded={defaultOpen ? 'true' : 'false'}
          aria-controls={item.id}
        >
          <span className={styles.number}>{item.number}/</span>
          <span className={styles.title}>{item.title}</span>
        </button>
      </h4>
      <div
        id={item.id}
        className={`accordion-collapse collapse ${styles.accordionContent} ${defaultOpen ? 'show' : ''}`}
        data-bs-parent='#accordionConversaciones'
      >
        <div className={`accordion-body ${styles.body}`}>{item.content}</div>
      </div>
    </div>
  )
}

export default AcordeonItem
