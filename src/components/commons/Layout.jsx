import { useLocation } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from '@/components/commons/Header'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contacto from '@/pages/Contacto'
import Notas from '@/pages/Notas'
import Seguros from '@/pages/Seguros'
import Landing from '@/pages/Landing'
import SegurosPersonalesCapitalizacion from '@/pages/subpages/SegurosPersonalesCapitalizacion'
import SegurosPersonalesGeneralesPatrimoniales from '@/pages/subpages/SegurosPersonalesGeneralesPatrimoniales'
import SegurosPersonalesVida from '@/pages/subpages/SegurosPersonalesVida'
import Footer from '@/components/commons/Footer'

import SegurosCorporativosContinuidadSocietaria from '@/pages/subpages/SegurosCorporativosContinuidadSocietaria'
import SegurosCorporativosCapitalizacion from '@/pages/subpages/SegurosCorporativosCapitalizacion'
import SegurosCorporativosGenerales from '@/pages/subpages/SegurosCorporativosGenerales'

import Unite from '@/pages/Unite'
import NotFound from '@/pages/NotFound'

const Layout = () => {
  const location = useLocation()

  // Detecta si estás en /landing
  const isLanding = location.pathname.startsWith('/landing')

  return (
    <>
      {/* Si estás en /landing, agrega una clase extra o cambia el header */}
      <Header special={isLanding} />
      <ToastContainer autoClose={false} transition={Zoom} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/notas' element={<Notas />} />
        <Route path='/seguros' element={<Seguros />} />
        <Route path='/landing' element={<Landing />} />
        <Route
          path='/seguros/personales/capitalizacion'
          element={<SegurosPersonalesCapitalizacion />}
        />
        <Route
          path='/seguros/personales/generales-patrimoniales'
          element={<SegurosPersonalesGeneralesPatrimoniales />}
        />
        <Route
          path='/seguros/personales/vida'
          element={<SegurosPersonalesVida />}
        />

        <Route
          path='/seguros/corporativos/continuidad-societaria'
          element={<SegurosCorporativosContinuidadSocietaria />}
        />
        <Route
          path='/seguros/corporativos/capitalizacion'
          element={<SegurosCorporativosCapitalizacion />}
        />
        <Route
          path='/seguros/corporativos/generales'
          element={<SegurosCorporativosGenerales />}
        />
        <Route
          path='/unite'
          element={
            <Unite
              type='default'
              titleForm='A continuación, te pediremos algunos datos personales para poder
              evaluar tu perfil'
              titleAside='¡Sumate al equipo!'
              descriptionAside='En Elbin nuestro objetivo es transformar la vida de
                  nuestros/as asesores/as dándoles las mejores herramientas para
                  crecer en confianza, ganar experiencia y poder desarrollarse
                  en una profesión que es única.'
              textBTN='ENVIAR'
            />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* Si estás en /landing, agrega una clase extra o cambia el footer */}
      <Footer special={isLanding} />
    </>
  )
}
export default Layout
