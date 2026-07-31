import styles from './iconos-animados.module.css'

import maletin from '@/assets/img/home/icono-maletin.png'
import usuario from '@/assets/img/home/icono-personas.png'
import grafico from '@/assets/img/home/icono-grafico.png'

const IconosAnimados = () => {
  return (
    <section className={`container ${styles.iconos}`}>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className='row'>
            <div data-aos='fade-up' className={`col-4 ${styles.content}`}>
              <img src={maletin} alt='icono maletin' />
              <p>+40 años en el mercado</p>
            </div>

            <div data-aos='fade-up' className={`col-4 ${styles.content}`}>
              <img src={usuario} alt='icono usuario' />
              <p>+100 asesores/as en el país</p>
            </div>

            <div data-aos='fade-up' className={`col-4 ${styles.content}`}>
              <img src={grafico} alt='icono grafico' />
              <p>+ 10.000 clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IconosAnimados
