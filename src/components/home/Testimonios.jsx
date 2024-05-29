import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/js/bootstrap.js'

import Slider from 'react-slick'
import UserGalery from '@/components/home/UserGalery'
import ModalTestimonio from '@/components/home/ModalTestimonio'

import comillas from '@/assets/img/home/comillas.svg'

import { getTestimonios } from '@/utils/dataUtils.js'

import styles from './testimonios.module.css'

const Testimonios = () => {
  const testimonios = getTestimonios('testimonios')
  const [user, setUser] = useState({})

  const setUserInModal = item => {
    setUser(item)
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 7,
    speed: 500,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className={`${styles.testimonios} container-fluid`}>
      <ModalTestimonio user={user} />

      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Testimonios
          </h2>
        </div>
      </div>

      <Slider {...settings}>
        {testimonios.map(item => (
          <Link
            className={`${styles.link} transition`}
            onClick={() => setUserInModal(item)}
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#userModal'
            key={item.id}
            to='#'
          >
            <UserGalery
              styles={styles}
              comillas={comillas}
              description={item.description}
              userImg={item.user_img}
              userName={item.name}
            />
          </Link>
        ))}
      </Slider>
    </section>
  )
}

export default Testimonios
