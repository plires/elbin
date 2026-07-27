import styles from './productor-seguros-cta.module.css'
import ButtonRed from '@/components/commons/ButtonRed'

const ProductorSegurosCta = () => {
  return (
    <div data-aos='fade-up' className={styles.banner}>
      <h3 className={styles.title}>
        Empezá tu carrera como{' '}
        <strong>Productor de Seguros</strong> en Elbin
      </h3>

      <ButtonRed className={styles.cta} to='/unite' text='Aplicá ahora' />
    </div>
  )
}

export default ProductorSegurosCta
