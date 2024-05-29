const CardImageGalery = ({ img, title, clase }) => {
  return (
    <article className='content_img_galeria'>
      <img className='img-fluid' src={img} alt={`texto alt de ${title}`} />
      <div className={clase}>
        <p>{title}</p>
      </div>
    </article>
  )
}

export default CardImageGalery
