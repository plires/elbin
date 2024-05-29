import 'bootstrap/js/dist/carousel.js'
import styles from './slide.module.css'

import logoElbin from '@/assets/img/logo-elbin-large.svg'

import slide1Desktop from '@/assets/img/home/slide-1.jpg'
import slide1DesktopWeb from '@/assets/img/home/slide-1.webp'
import slide2Desktop from '@/assets/img/home/slide-2.jpg'
import slide2DesktopWeb from '@/assets/img/home/slide-2.webp'
import slide3Desktop from '@/assets/img/home/slide-3.jpg'
import slide3DesktopWeb from '@/assets/img/home/slide-3.webp'
import slide4Desktop from '@/assets/img/home/slide-4.jpg'
import slide4DesktopWeb from '@/assets/img/home/slide-4.webp'
import slide5Desktop from '@/assets/img/home/slide-5.jpg'
import slide5DesktopWeb from '@/assets/img/home/slide-5.webp'

import slide1Mobile from '@/assets/img/home/slide-1-mobile.jpg'
import slide1MobileWeb from '@/assets/img/home/slide-1-mobile.webp'
import slide2Mobile from '@/assets/img/home/slide-2-mobile.jpg'
import slide2MobileWeb from '@/assets/img/home/slide-2-mobile.webp'
import slide3Mobile from '@/assets/img/home/slide-3-mobile.jpg'
import slide3MobileWeb from '@/assets/img/home/slide-3-mobile.webp'
import slide4Mobile from '@/assets/img/home/slide-4-mobile.jpg'
import slide4MobileWeb from '@/assets/img/home/slide-4-mobile.webp'
import slide5Mobile from '@/assets/img/home/slide-5-mobile.jpg'
import slide5MobileWeb from '@/assets/img/home/slide-5-mobile.webp'

const Slide = () => {
  return (
    <section
      id='carouselElbin'
      className={`carousel ${styles.section_slide} slide carousel-fade`}
      data-bs-ride='carousel'
      data-bs-config='{"pause":"false", "interval":4000}'
    >
      <div className='carousel-inner'>
        <div className={`carousel-item active ${styles.content}`}>
          <picture>
            <source
              media='(max-width: 576px)'
              srcSet={slide1MobileWeb}
              type='image/webp'
            />
            <source
              media='(max-width: 576px)'
              srcSet={slide1Mobile}
              type='image/jpeg'
            />

            <source srcSet={slide1DesktopWeb} type='image/webp' />
            <source srcSet={slide1Desktop} type='image/jpeg' />
            <img
              className='d-wock w-100'
              src={slide1Desktop}
              alt='slide elbin 1'
            />
          </picture>
          <div className={`${styles.logo}`}>
            <img
              className={`${styles.logo_slide}`}
              src={logoElbin}
              alt='logo elbin en slide'
            />
          </div>
          <div data-aos='fade-up' className={`${styles.degrade}`}>
            <h1 className='chillax'>¡Somos Elbin!</h1>
            <p>
              Nos destacamos hace más de 40 años armando equipos
              <br /> y formando profesionales de manera constante.
            </p>
          </div>
        </div>

        <div className='carousel-item'>
          <picture>
            <source
              media='(max-width: 576px)'
              srcSet={slide2MobileWeb}
              type='image/webp'
            />
            <source
              media='(max-width: 576px)'
              srcSet={slide2Mobile}
              type='image/jpeg'
            />

            <source srcSet={slide2DesktopWeb} type='image/webp' />
            <source srcSet={slide2Desktop} type='image/jpeg' />
            <img
              className='d-wock w-100'
              src={slide2Desktop}
              alt='slide elbin 2'
            />
          </picture>
        </div>

        <div className='carousel-item'>
          <picture>
            <source
              media='(max-width: 576px)'
              srcSet={slide3MobileWeb}
              type='image/webp'
            />
            <source
              media='(max-width: 576px)'
              srcSet={slide3Mobile}
              type='image/jpeg'
            />

            <source srcSet={slide3DesktopWeb} type='image/webp' />
            <source srcSet={slide3Desktop} type='image/jpeg' />
            <img
              className='d-wock w-100'
              src={slide3Desktop}
              alt='slide elbin 3'
            />
          </picture>
        </div>

        <div className='carousel-item'>
          <picture>
            <source
              media='(max-width: 576px)'
              srcSet={slide4MobileWeb}
              type='image/webp'
            />
            <source
              media='(max-width: 576px)'
              srcSet={slide4Mobile}
              type='image/jpeg'
            />

            <source srcSet={slide4DesktopWeb} type='image/webp' />
            <source srcSet={slide4Desktop} type='image/jpeg' />
            <img
              className='d-wock w-100'
              src={slide4Desktop}
              alt='slide elbin 4'
            />
          </picture>
        </div>

        <div className='carousel-item'>
          <picture>
            <source
              media='(max-width: 576px)'
              srcSet={slide5MobileWeb}
              type='image/webp'
            />
            <source
              media='(max-width: 576px)'
              srcSet={slide5Mobile}
              type='image/jpeg'
            />

            <source srcSet={slide5DesktopWeb} type='image/webp' />
            <source srcSet={slide5Desktop} type='image/jpeg' />
            <img
              className='d-wock w-100'
              src={slide5Desktop}
              alt='slide elbin 5'
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Slide
