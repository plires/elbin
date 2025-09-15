import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logoElbinLarge from '@/assets/img/logo-elbin-large.svg'
import logoElbinSmall from '@/assets/img/logo-elbin-small.svg'
import bars from '@/assets/img/bars.svg'
import barsWhite from '@/assets/img/bars-white.svg'
import close from '@/assets/img/close.svg'
import closeWhite from '@/assets/img/close-white.svg'

import instagramColor from '@/assets/img/instagram.svg'
import facebookColor from '@/assets/img/facebook.svg'
import linkedinColor from '@/assets/img/linkedin.svg'

import instagramWhite from '@/assets/img/instagram-white.svg'
import facebookWhite from '@/assets/img/facebook-white.svg'
import linkedinWhite from '@/assets/img/linkedin-white.svg'

import './header.css'

const Header = ({ special }) => {
  const [iconMobile, setIconMobile] = useState(bars)
  const [isNavMobileVisible, setIsNavMobileVisible] = useState(false)
  const [logo, setLogo] = useState(logoElbinLarge)
  const [instagram, setInstagram] = useState(instagramColor)
  const [facebook, setFacebook] = useState(facebookColor)
  const [linkedin, setLinkedin] = useState(linkedinColor)

  const headerElement = useRef()

  const closeAll = () => {
    setIsNavMobileVisible(false)
    setIcons()
  }

  const toogleNavBar = () => {
    setIsNavMobileVisible(!isNavMobileVisible)
    setIcons()
  }

  const setIcons = () => {
    if (!isNavMobileVisible && window.scrollY < 100) {
      setIconMobile(bars)
    }

    if (!isNavMobileVisible && window.scrollY > 100) {
      setIconMobile(barsWhite)
    }

    if (isNavMobileVisible && window.scrollY < 100) {
      setIconMobile(close)
    }

    if (isNavMobileVisible && window.scrollY > 100) {
      setIconMobile(closeWhite)
    }
  }

  useEffect(() => {
    setIcons()
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const screenWidth = screen.width

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoElbinSmall)

        if (screenWidth > 992) {
          setInstagram(instagramWhite)
          setFacebook(facebookWhite)
          setLinkedin(linkedinWhite)
        }
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoElbinLarge)

        if (screenWidth > 992) {
          setInstagram(instagramColor)
          setFacebook(facebookColor)
          setLinkedin(linkedinColor)
        }
      }

      setIcons()
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isNavMobileVisible])

  return (
    <header
      className={special ? 'transition specialHeader' : 'transition'}
      ref={headerElement}
    >
      <div className={`content`}>
        <NavLink activeclassname='active' className='transition' to='/'>
          <img
            className={`transition img-fluid logo`}
            src={logo}
            alt='logo elbin'
          />
        </NavLink>

        {!special && (
          <>
            <span
              className={`transition btn_nav_mobile`}
              onClick={toogleNavBar}
            >
              <img
                className={`transition nav_mobile`}
                src={iconMobile}
                alt='nav bars mobile'
              />
            </span>

            <div
              className={
                isNavMobileVisible && screen.width < 992
                  ? `transition open nav_rrss`
                  : `transition nav_rrss`
              }
            >
              <nav>
                <ul>
                  <li>
                    <NavLink
                      onClick={() => closeAll()}
                      activeclassname='active'
                      className='transition'
                      to='/'
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => closeAll()}
                      activeclassname='active'
                      className='transition'
                      to='/about'
                    >
                      SOBRE ELBIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => closeAll()}
                      activeclassname='active'
                      className='transition'
                      to='/seguros'
                    >
                      SEGUROS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => closeAll()}
                      activeclassname='active'
                      className='transition'
                      to='/unite'
                    >
                      UNITE AL EQUIPO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => closeAll()}
                      activeclassname='active'
                      className='transition'
                      to='/contacto'
                    >
                      CONTACTO
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <ul className={`rrss`}>
                <li>
                  <a
                    className='transition'
                    rel='noopener'
                    target='_blank'
                    href={import.meta.env.VITE_LINKEDIN}
                  >
                    <img
                      className='linkedin transition'
                      src={linkedin}
                      alt='linkedin elbin'
                    />
                  </a>
                </li>

                <li>
                  <a
                    className='transition'
                    rel='noopener'
                    target='_blank'
                    href={import.meta.env.VITE_INSTAGRAM}
                  >
                    <img
                      className='instagram transition'
                      src={instagram}
                      alt='instagram elbin'
                    />
                  </a>
                </li>
                <li>
                  <a
                    className='transition'
                    rel='noopener'
                    target='_blank'
                    href={import.meta.env.VITE_FACEBOOK}
                  >
                    <img
                      className='facebook transition'
                      src={facebook}
                      alt='facebook elbin'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
export default Header
