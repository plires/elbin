import AcordeonItem from './AcordeonItem'
import LongevidadFuturoIntro from './LongevidadFuturoIntro'
import EquidadLiderazgoIntro from './EquidadLiderazgoIntro'
import AutonomiaEconomicaIntro from './AutonomiaEconomicaIntro'
import CarreraElbinCards from './CarreraElbinCards'
import ProgramaDestacado from './ProgramaDestacado'
import reunionNext50 from '@/assets/img/sustenta/reunion-nex-50.webp'
import logoNext50 from '@/assets/img/sustenta/next-50.webp'
import mujeresNegocio from '@/assets/img/sustenta/mujeres-negocio.webp'
import logoWomanPas from '@/assets/img/sustenta/woman-pas.webp'
import logoInnovate from '@/assets/img/sustenta/logo-innovate.webp'
import logoZurich from '@/assets/img/sustenta/logo-zurich.webp'
import logoTheShift from '@/assets/img/sustenta/logo-the-shift.webp'
import pdfNext50 from '@/assets/pdf/programa-next-50.pdf'
import pdfMujeresEnNegocios from '@/assets/pdf/programa-mujeres-en-negocios.pdf'
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
          partnerGroups={[
            {
              label: 'Con el apoyo de',
              partners: [
                { src: logoZurich, alt: 'Zurich' },
                { src: logoTheShift, alt: 'The Shift Certified' },
              ],
            },
          ]}
          primaryCta={{
            text: 'Postulate',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSeC2HtqPDlK-rxAtwLMEuSTOxBoVEl7vHpGsok1SBrpOzHhbw/viewform',
          }}
          secondaryCta={{ text: 'Descargar PDF', href: pdfNext50 }}
        />
      </>
    ),
  },
  {
    id: 'conversacion-2',
    number: '02',
    title: 'Equidad y Liderazgo',
    content: (
      <>
        <EquidadLiderazgoIntro />
        <ProgramaDestacado
          image={mujeresNegocio}
          imageAlt='Asesora del Programa Mujeres en Negocios'
          logo={logoWomanPas}
          logoAlt='WomanPas'
          title='Mujeres en Negocios'
          description={[
            'Un programa gratuito que está diseñado específicamente para motivar, impulsar y dar las herramientas adecuadas a las asesoras financieras, acompañándolas en su desarrollo profesional para que puedan construir sus propias empresas.',
          ]}
          partnerGroups={[
            {
              label: 'Desarrollado por:',
              partners: [{ src: logoInnovate, alt: 'Innovate' }],
            },
            {
              label: 'Con el apoyo de',
              partners: [{ src: logoZurich, alt: 'Zurich' }],
            },
          ]}
          primaryCta={{
            text: 'Postulate',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSdvjk3KxuVcIgyVG_lZbcydYJGaAxVsmwW9ZcT_OmQgQ_Saig/closedform',
          }}
          secondaryCta={{ text: 'Descargar PDF', href: pdfMujeresEnNegocios }}
        />
      </>
    ),
  },
  {
    id: 'conversacion-3',
    number: '03',
    title: 'Autonomía económica',
    content: (
      <>
        <AutonomiaEconomicaIntro />
        <CarreraElbinCards />
      </>
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
