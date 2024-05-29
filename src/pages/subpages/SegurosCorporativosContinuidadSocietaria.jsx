import BreadcrumbSeguros from '@/components/seguros/BreadcrumbSeguros'
import HeaderSeguros from '@/components/seguros/HeaderSeguros'
import ContenidoSeguros from '@/components/seguros/ContenidoSeguros'
import ContactoWhatsapp from '@/components/commons/ContactoWhatsapp'

import styles from './seguros.module.css'

import { getSegurosCorporativosContinuidadSocietaria } from '@/utils/dataUtils.js'

const SegurosCorporativosContinuidadSocietaria = () => {
  const data = getSegurosCorporativosContinuidadSocietaria(
    'seguroscorporativoscontinuidadsocietaria',
  )

  return (
    <main className={`${styles.section_seguros_detalle}`}>
      <BreadcrumbSeguros
        path='SEGUROS CORPORATIVOS // '
        pathactual='CONTINUIDAD SOCIETARIA'
      />
      <HeaderSeguros
        title={'Continuidad societaria'}
        description={
          'Creemos que el mayor capital de todo negocio es su gente y sabemos también que el verdadero desafío no es encontrar el candidato ideal para un puesto de trabajo, sino saber deslizarlo frente a las ofertas del mercado laboral.'
        }
      />
      <ContenidoSeguros
        data={data}
        type='accordion'
        textbtn='Tener contratado un seguro de protección para los directivos, los socios o para un empleado clave de su compañía, le da la tranquilidad de saber que frente a un fallecimiento el futuro de la empresa estará protegido. Así también, un plan de retiro para sus empleados es una herramienta más de motivación para ellos, potenciando el sentimiento de pertenencia
        y compromiso. Y al mismo tiempo, es una inversión importante para usted: disminuir la rotación de personal significa
        un enorme crecimiento económico. Por todo esto, motivando y cuidando tanto al área gerencial como al resto del personal, a través de la contratación  de cualquiera de estos productos, su organización al igual que ellos también crece
        y se beneficia.'
      />
      <ContactoWhatsapp />
    </main>
  )
}

export default SegurosCorporativosContinuidadSocietaria
