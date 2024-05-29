import BreadcrumbSeguros from '@/components/seguros/BreadcrumbSeguros'
import HeaderSeguros from '@/components/seguros/HeaderSeguros'
import ContenidoSeguros from '@/components/seguros/ContenidoSeguros'
import ContactoWhatsapp from '@/components/commons/ContactoWhatsapp'

import styles from './seguros.module.css'

import { getSegurosCorporativosGenerales } from '@/utils/dataUtils.js'

const SegurosCorporativosGenerales = () => {
  const data = getSegurosCorporativosGenerales('seguroscorporativosgenerales')

  return (
    <main className={`${styles.section_seguros_detalle}`}>
      <BreadcrumbSeguros
        path='SEGUROS CORPORATIVOS // '
        pathactual='GENERALES'
      />
      <HeaderSeguros
        title={'Seguros generales'}
        description={
          'Cada empresa es distinta y comprenderla significa asistirla mucho mejor.'
        }
      />
      <ContenidoSeguros data={data} type='plain' />
      <ContactoWhatsapp />
    </main>
  )
}

export default SegurosCorporativosGenerales
