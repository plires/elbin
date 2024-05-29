import AboutHeader from '@/components/about/AboutHeader'
import Trayectoria from '@/components/about/Trayectoria'
import MisionVision from '@/components/about/MisionVision'
import LogosAseguradoras from '@/components/home/LogosAseguradoras'
import Staff from '@/components/about/Staff'
import LideresEquipo from '@/components/about/LideresEquipo'

const About = () => {
  return (
    <main className='section_about'>
      <AboutHeader />
      <Trayectoria />
      <MisionVision />
      <LogosAseguradoras />
      <Staff />
      <LideresEquipo />
    </main>
  )
}

export default About
