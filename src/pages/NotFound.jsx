import ButtonRed from '@/components/commons/ButtonRed'
import styles from './not-found.module.css'

const NotFound = () => {
  return (
    <main className={`${styles.section_not_found}`}>
      <h1>Error 404</h1>
      <p>
        Llegaste aquí buscando algo que ya no está. <br />
        contactate con nosotros y te ayudaremos a encontrarlo
      </p>
      <div className='content_btn'>
        <ButtonRed to='/' text='Seguir Navegando' />
      </div>
    </main>
  )
}

export default NotFound
