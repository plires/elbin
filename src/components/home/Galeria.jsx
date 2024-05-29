import { useState } from 'react'
import { Link } from 'react-router-dom'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { getGalery } from '@/utils/dataUtils.js'
import CardImageGalery from '@/components/home/CardImageGalery'
import ModalGalery from '@/components/home/ModalGalery'

import './galeria.css'

const Galeria = () => {
  const [imgGaleryLarge, setImgGaleryLarge] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)

  const setDataModal = (img, title) => {
    setImgGaleryLarge(img)
    setImgTitle(title)
  }
  const galery = getGalery('galery')

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 7,
    speed: 500,
    swipeToSlide: true,
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
    <>
      <ModalGalery imgsrc={imgGaleryLarge} title={imgTitle} />

      <section data-aos='fade-up' className={`galeria`}>
        <Slider {...settings}>
          {galery.map(item => (
            <Link
              key={item.id}
              onClick={() => setDataModal(item.img_src, item.title)}
              data-bs-toggle='modal'
              data-bs-target='#galeryModal'
              className='link'
            >
              <CardImageGalery
                img={item.img_src}
                title={item.title}
                clase={item.class}
              />
            </Link>
          ))}
        </Slider>
      </section>
    </>
  )
}

export default Galeria
