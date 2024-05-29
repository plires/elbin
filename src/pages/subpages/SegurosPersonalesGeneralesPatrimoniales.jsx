import BreadcrumbSeguros from '@/components/seguros/BreadcrumbSeguros'
import HeaderSeguros from '@/components/seguros/HeaderSeguros'
import ContenidoSeguros from '@/components/seguros/ContenidoSeguros'
import ContactoWhatsapp from '@/components/commons/ContactoWhatsapp'

import styles from './seguros.module.css'

import { getSegurosPersonalesGeneralesPatrimoniales } from '@/utils/dataUtils.js'

const SegurosPersonalesCapitalizacion = () => {
  const data = getSegurosPersonalesGeneralesPatrimoniales(
    'segurospersonalesgeneralespatrimoniales',
  )

  return (
    <main className={`${styles.section_seguros_detalle}`}>
      <BreadcrumbSeguros
        path='SEGUROS PERSONALES // '
        pathactual='GENERALES PATRIMONIALES'
      />
      <HeaderSeguros
        title={'Seguros generales patrimoniales'}
        description={
          'Los seguros generales le brindan la tranquilidad de saber que todo aquello que tanto le costó conseguir, está protegido.'
        }
      />
      <ContenidoSeguros
        data={data}
        type='accordion'
        textbtn='Elbinger trabaja con compañías de seguros generales de primer nivel y con las coberturas más completas del mercado. Gracias a esta realidad podemos acompañarlo en todo el proceso que implica contratar un seguro: un ejecutivo 
        de cuentas estará a su lado y se encargará de realizar un análisis de sus necesidades, con el objetivo de lograr la mejor elección conjugando compañía, producto y precio. También, estaremos ahí para agilizar el proceso operativo
         y administrativo. Y por supuesto, en caso de siniestro, lo asesoraremos para que usted reciba en tiempo y forma el pago correcto de las eventuales indemnizaciones.'
      />
      <ContactoWhatsapp />
    </main>
  )
}

export default SegurosPersonalesCapitalizacion
