import ButtonRed from '@/components/commons/ButtonRed'
import styles from './ser-parte.module.css'
const SerParte = () => {
  return (
    <section data-aos='fade-up' className={`container ${styles.ser_parte}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='chillax'>¿Querés ser parte del equipo?</h2>
          <ButtonRed to='/unite' text='VER MÁS' />
        </div>
      </div>
    </section>
  )
}
export default SerParte
