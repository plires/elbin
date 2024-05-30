import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/utils/scrollToTop'
import Header from '@/components/commons/Header'
import Footer from '@/components/commons/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import Notas from './pages/Notas'
import Seguros from './pages/Seguros'
import SegurosPersonalesCapitalizacion from './pages/subpages/SegurosPersonalesCapitalizacion'
import SegurosPersonalesGeneralesPatrimoniales from './pages/subpages/SegurosPersonalesGeneralesPatrimoniales'
import SegurosPersonalesVida from './pages/subpages/SegurosPersonalesVida'

import SegurosCorporativosContinuidadSocietaria from './pages/subpages/SegurosCorporativosContinuidadSocietaria'
import SegurosCorporativosCapitalizacion from './pages/subpages/SegurosCorporativosCapitalizacion'
import SegurosCorporativosGenerales from './pages/subpages/SegurosCorporativosGenerales'

import Unite from './pages/Unite'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/notas' element={<Notas />} />
          <Route path='/seguros' element={<Seguros />} />
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
          <Route path='/unite' element={<Unite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
