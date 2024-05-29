import BreadcrumbSeguros from '@/components/seguros/BreadcrumbSeguros'
import HeaderSeguros from '@/components/seguros/HeaderSeguros'
import ContenidoSeguros from '@/components/seguros/ContenidoSeguros'
import ContactoWhatsapp from '@/components/commons/ContactoWhatsapp'

import styles from './seguros.module.css'

import { getSegurosCorporativosCapitalizacion } from '@/utils/dataUtils.js'

const SegurosCorporativosCapitalizacion = () => {
  const data = getSegurosCorporativosCapitalizacion(
    'seguroscorporativoscapitalizacion',
  )

  return (
    <main className={`${styles.section_seguros_detalle}`}>
      <BreadcrumbSeguros
        path='SEGUROS CORPORATIVOS // '
        pathactual='CAPITALIZACION'
      />
      <HeaderSeguros
        title={'Capitalización'}
        description={
          'Tenemos la certeza de que acudir a un especialista para que lo oriente en sus inversiones, es en sí mismo una inversión a largo plazo.'
        }
      />
      <ContenidoSeguros
        data={data}
        type='accordion'
        textbtn='Nuestros asesores desarrollan estrategias y recomendaciones personalizadas en función de las metas de negocios de cada cliente. Mediante la planificación financiera y gracias a las diversas alternativas de inversión, con nuestra ayuda podrá lograr aquellos resultados que mejor lo representen.'
      />
      <ContactoWhatsapp />
    </main>
  )
}

export default SegurosCorporativosCapitalizacion
