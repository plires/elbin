import { Routes, Route } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from '@/components/commons/Header'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contacto from '@/pages/Contacto'
import Notas from '@/pages/Notas'
import Seguros from '@/pages/Seguros'
import Sustenta from '@/pages/Sustenta'
import Landing from '@/pages/Landing'
import SegurosPersonalesCapitalizacion from '@/pages/subpages/SegurosPersonalesCapitalizacion'
import SegurosPersonalesGeneralesPatrimoniales from '@/pages/subpages/SegurosPersonalesGeneralesPatrimoniales'
import SegurosPersonalesVida from '@/pages/subpages/SegurosPersonalesVida'
import Footer from '@/components/commons/Footer'

import SegurosCorporativosContinuidadSocietaria from '@/pages/subpages/SegurosCorporativosContinuidadSocietaria'
import SegurosCorporativosCapitalizacion from '@/pages/subpages/SegurosCorporativosCapitalizacion'
import SegurosCorporativosGenerales from '@/pages/subpages/SegurosCorporativosGenerales'

// import Unite from '@/pages/Unite'
import NotFound from '@/pages/NotFound'

const Layout = () => {
  // Detecta si estás en /landing
  // const isLanding = location.pathname.startsWith('/landing')
  const isLanding = false

  return (
    <>
      {/* Si estás en /landing, agrega una clase extra o cambia el header */}
      <Header special={isLanding} />
      <ToastContainer autoClose={false} transition={Zoom} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/contacto'
          element={<Contacto context='page_contacto' />}
        />
        <Route path='/notas' element={<Notas />} />
        <Route path='/seguros' element={<Seguros />} />
        <Route path='/sustenta' element={<Sustenta />} />
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
        <Route path='/unite' element={<Landing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* Si estás en /landing, agrega una clase extra o cambia el footer */}
      <Footer special={isLanding} />
    </>
  )
}
export default Layout
