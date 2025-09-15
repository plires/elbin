import Hero from '@/components/landing/Hero'
import Estadisticas from '@/components/landing/Estadisticas'
import Caracteristicas from '@/components/landing/Caracteristicas'
import CtaLanding from '@/components/landing/CtaLanding'
import Unite from '@/pages/Unite'

import './landing.css'

const Landing = () => {
  return (
    <main className='section_Landing'>
      <Hero />
      <Estadisticas />
      <Caracteristicas />
      <CtaLanding />
      <Unite
        titleLanding='Aplicá y descubrí si tu perfil califica para <br />unirte a Elbin y hacer carrera en Zurich.'
        type='landing'
        titleForm='Al avanzar en tu aplicación, vas a recibir una <span>guía exclusiva</span> para conocer el mercado asegurador, entender la oportunidad y estar preparado desde el primer día.'
        descriptionAside='<span>No necesitás experiencia previa en seguros:</span> Te damos la capacitación, las herramientas y el acompañamiento que necesitás para empezar. <br /><br />
        <span class="colorPrimary">Lo importante es que tengas visión, que seas independiente y que quieras transformar tu red en nuevas oportunidades.</span>'
        textBTN='APLICÁ AHORA'
      />
    </main>
  )
}

export default Landing
