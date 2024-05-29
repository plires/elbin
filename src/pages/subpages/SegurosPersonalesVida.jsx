import BreadcrumbSeguros from '@/components/seguros/BreadcrumbSeguros'
import HeaderSeguros from '@/components/seguros/HeaderSeguros'
import ContenidoSeguros from '@/components/seguros/ContenidoSeguros'
import ContactoWhatsapp from '@/components/commons/ContactoWhatsapp'

import styles from './seguros.module.css'

import { getSegurosPersonalesVida } from '@/utils/dataUtils.js'

const SegurosPersonalesVida = () => {
  const data = getSegurosPersonalesVida('segurospersonalesvida')

  return (
    <main className={`${styles.section_seguros_detalle}`}>
      <BreadcrumbSeguros path='SEGUROS PERSONALES // ' pathactual='VIDA' />
      <HeaderSeguros
        title={'Seguros de vida'}
        description={
          'El seguro de protección ayuda a resguardar económicamente a su familia en caso de fallecimiento. Si bien esa indemnización no puede reponer la pérdida emocional, sí alivia la pérdida económica sufrida.'
        }
      />
      <ContenidoSeguros
        type='plain_accordion'
        data={data}
        textbtn='En Elbin construimos el plan adecuado para su necesidad, en base a un paquete de productos altamente flexibles 
        y confiables. De este modo, le damos la tranquilidad de saber que si usted no está, el estilo de vida de sus seres más queridos continuará garantizado.Además de proteger a la familia, el dinero que se obtiene con un seguro de estas características también puede cubrir otras necesidades tales como: hipotecas o deudas, gastos sucesorios, donaciones
         y, fundamentalmente, la tranquilidad del saber que como sus seres más queridos ya están resguardados, usted puede disfrutar en vida de su dinero.
        '
      />
      <ContactoWhatsapp />
    </main>
  )
}

export default SegurosPersonalesVida
