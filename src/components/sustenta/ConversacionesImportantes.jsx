import AcordeonItem from './AcordeonItem'
import styles from './conversaciones-importantes.module.css'

const items = [
  {
    id: 'conversacion-1',
    number: '01',
    title: 'Longevidad y Futuro',
    description:
      'Contenido ficticio: acá va la descripción real de este item cuando la definamos juntos.',
  },
  {
    id: 'conversacion-2',
    number: '02',
    title: 'Equidad y Liderazgo',
    description:
      'Contenido ficticio: acá va la descripción real de este item cuando la definamos juntos.',
  },
  {
    id: 'conversacion-3',
    number: '03',
    title: 'Autonomía económica',
    description:
      'Contenido ficticio: acá va la descripción real de este item cuando la definamos juntos.',
  },
]

const ConversacionesImportantes = () => {
  return (
    <section className={`${styles.conversaciones} container`}>
      <div data-aos='fade-up' className={styles.header}>
        <h2 className='chillax'>
          Cuatro conversaciones que nos parecen importantes.
        </h2>
        <p>
          Porque proteger no es solamente responder. También es mirar hacia
          adelante y actuar en consecuencia.
        </p>
      </div>

      <div data-aos='fade-up' className={styles.category}>
        <h3>Impacto social y Sustentabilidad</h3>

        <div
          className={`accordion accordion-flush ${styles.accordion_custom}`}
          id='accordionConversaciones'
        >
          {items.map((item, index) => (
            <AcordeonItem key={item.id} item={item} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConversacionesImportantes
