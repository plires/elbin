import ImageCircle from '@/components/commons/ImageCircle'
import styles from './modal.module.css'
const ModalTestimonio = ({ user }) => {
  return (
    <section
      className={`modal fade ${styles.user_modal}`}
      id='userModal'
      tabIndex='-1'
      aria-labelledby='userModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className={`modal-content ${styles.content}`}>
          <div className={`modal-header ${styles.modal_header_custom}`}>
            <p className={`${styles.title_staff}`}>{user.name}</p>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>

          <div className='modal-body'>
            <p>
              <img
                className={`${styles.comillas_izq}`}
                src='/src/assets/img/home/comillas.svg'
                alt={`comillas ${user.name}`}
              />
              {user.description}
              <img
                className={`${styles.comillas_der}`}
                src='/src/assets/img/home/comillas.svg'
                alt={`comillas ${user.name}`}
              />
            </p>
            <div className={`${styles.content_img}`}>
              <ImageCircle
                img={user.user_img}
                alt={`imagen del usuario en modal: ${user.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ModalTestimonio
