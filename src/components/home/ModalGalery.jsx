import styles from './modal-galery.module.css'

const ModalGalery = ({ imgsrc, title }) => {
  return (
    <div
      className='modal fade'
      id='galeryModal'
      tabIndex='-1'
      aria-labelledby='galeryModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className={`modal-header ${styles.header_custom}`}>
            <h1 className='modal-title fs-5' id='galeryModalLabel'>
              {title}
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <img className='img-fluid' src={imgsrc} alt={title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalGalery
