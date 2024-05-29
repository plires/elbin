import { Link } from 'react-router-dom'
import './footer.css'

import linkedin from '@/assets/img/linkedin-white.svg'
import facebook from '@/assets/img/facebook-white.svg'
import instagram from '@/assets/img/instagram-white.svg'

const Footer = () => {
  return (
    <footer className='img-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3 column'>
            <h5>OFICINAS</h5>
            <p>
              Mariscal Antonio José de Sucre 1530 - oficina 203
              <br />
              Tel. +549 - 1155772005
            </p>
            <div className='rrss'>
              <a
                className='transition'
                rel='noopener'
                target='_blank'
                href={import.meta.env.VITE_LINKEDIN}
              >
                <img
                  className='img-fluid'
                  src={linkedin}
                  alt='linkedin footer'
                />
              </a>
              <a
                className='transition'
                rel='noopener'
                target='_blank'
                href={import.meta.env.VITE_INSTAGRAM}
              >
                <img
                  className='img-fluid'
                  src={instagram}
                  alt='instagram footer'
                />
              </a>
              <a
                className='transition'
                rel='noopener'
                target='_blank'
                href={import.meta.env.VITE_FACEBOOK}
              >
                <img
                  className='img-fluid'
                  src={facebook}
                  alt='facebook footer'
                />
              </a>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 column'>
            <h5>SEGUROS CORPORATIVOS</h5>
            <div className='content_links'>
              <Link
                className='transition'
                to='/seguros/corporativos/continuidad-societaria'
              >
                Continuidad Societaria
              </Link>
              <Link
                className='transition'
                to='/seguros/corporativos/capitalizacion'
              >
                Capitalización
              </Link>
              <Link className='transition' to='/seguros/corporativos/generales'>
                Seguros generales
              </Link>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 column'>
            <h5>SEGUROS PERSONALES</h5>
            <div className='content_links'>
              <Link className='transition' to='/seguros/personales/vida'>
                Seguros de vida
              </Link>
              <Link
                className='transition'
                to='/seguros/personales/capitalizacion'
              >
                Capitalización
              </Link>
              <Link
                className='transition'
                to='/seguros/personales/generales-patrimoniales'
              >
                Generales Patrimoniales
              </Link>
            </div>
          </div>

          <div className='col-md-6 col-lg-3 column'>
            <div className='content_links'>
              <Link className='transition' to='/about'>
                SOBRE ELBIN
              </Link>
              {/* <Link className='transition' to='#'>
                NOTAS
              </Link> */}
              <Link className='transition' to='/unite'>
                UNITE AL EQUIPO
              </Link>
              <Link className='transition' to='/contacto'>
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
