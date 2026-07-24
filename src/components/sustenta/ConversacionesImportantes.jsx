import AcordeonItem from './AcordeonItem'
import LongevidadFuturoIntro from './LongevidadFuturoIntro'
import ProgramaDestacado from './ProgramaDestacado'
import reunionNext50 from '@/assets/img/sustenta/reunion-nex-50.webp'
import logoNext50 from '@/assets/img/sustenta/next-50.webp'
import logoZurich from '@/assets/img/sustenta/logo-zurich.webp'
import logoTheShift from '@/assets/img/sustenta/logo-the-shift.webp'
import styles from './conversaciones-importantes.module.css'

const items = [
  {
    id: 'conversacion-1',
    number: '01',
    title: 'Longevidad y Futuro',
    content: (
      <>
        <LongevidadFuturoIntro />
        <ProgramaDestacado
          image={reunionNext50}
          imageAlt='Equipo de Elbin en una reunión de Next 50'
          logo={logoNext50}
          logoAlt='Next 50'
          title='Los próximos 50 empiezan hoy.'
          description={[
            'Una nueva etapa profesional con propósito para quienes construyeron una carrera sólida, en una empresa, en relación de dependencia o de forma independiente, en banca, finanzas, derecho, contabilidad o el mundo corporativo.',
            'En Elbin convertís décadas de trayectoria en un rol concreto como asesor de planificación financiera.',
          ]}
          partnersLabel='Con el apoyo de'
          partners={[
            { src: logoZurich, alt: 'Zurich' },
            { src: logoTheShift, alt: 'The Shift Certified' },
          ]}
          primaryCta={{ text: 'POSTULATE', href: '#' }}
          secondaryCta={{ text: 'DESCARGAR PDF', href: '#' }}
        />
      </>
    ),
  },
  {
    id: 'conversacion-2',
    number: '02',
    title: 'Equidad y Liderazgo',
    content: (
      <p>
        Contenido ficticio: acá va la descripción real de este item cuando la
        definamos juntos.
      </p>
    ),
  },
  {
    id: 'conversacion-3',
    number: '03',
    title: 'Autonomía económica',
    content: (
      <p>
        Contenido ficticio: acá va la descripción real de este item cuando la
        definamos juntos.
      </p>
    ),
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
