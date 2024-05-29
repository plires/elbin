import Slide from '@/components/home/Slide'
import IconosAnimados from '@/components/home/IconosAnimados'
import Features from '@/components/home/Features'
import Cta from '@/components/home/Cta'
import ProcesoBlindaje from '@/components/home/ProcesoBlindaje'
import LogosAseguradoras from '@/components/home/LogosAseguradoras'
import Galeria from '@/components/home/Galeria'
import NuestrosSeguros from '@/components/home/NuestrosSeguros'
import Testimonios from '@/components/home/Testimonios'
import SerParte from '@/components/home/SerParte'

const Home = () => {
  return (
    <main className='section_home'>
      <Slide />
      <IconosAnimados />
      <Features />
      <Cta />
      <ProcesoBlindaje />
      <Galeria />
      <LogosAseguradoras />
      <NuestrosSeguros />
      <Testimonios />
      <SerParte />
    </main>
  )
}

export default Home
