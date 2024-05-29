import styles from './contenido-seguros.module.css'

const ContenidoSeguros = ({ data, textbtn, type }) => {
  if (type === 'accordion') {
    return (
      <section
        className={`container content_acordion_seguros ${styles.content_acordion_seguros}`}
      >
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up' className='chillax'>
              Sobre el seguro
            </h2>

            <div className='accordion' id='accordionSeguros'>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className={`accordion-button collapsed`}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <p className={`${styles.parrafo_btn}`}>{textbtn}</p>
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionSeguros'
                >
                  <div className={`accordion-body ${styles.content}`}>
                    {data.map(item => (
                      <article
                        className={`${styles.content_article}`}
                        key={item.id}
                      >
                        {item.icon && (
                          <img
                            className={`img-fluid ${styles.tilde}`}
                            src={item.icon}
                            alt={item.title}
                          />
                        )}
                        <p dangerouslySetInnerHTML={{ __html: item.title }} />
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else if (type === 'plain_accordion') {
    return (
      <section
        className={`container content_acordion_seguros ${styles.content_acordion_seguros}`}
      >
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up' className='chillax'>
              Sobre el seguro
            </h2>

            <div className='accordion' id='accordionSeguros'>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className={`accordion-button collapsed`}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <p className={`${styles.parrafo_btn} `}>{textbtn}</p>
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionSeguros'
                >
                  <div
                    className={`accordion-body ${styles.content} ${styles.content_data_plain}`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: data[0].description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section
        className={`container content_acordion_seguros ${styles.content_acordion_seguros}`}
      >
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h2 data-aos='fade-up' className='chillax'>
              Sobre el seguro
            </h2>

            <div dangerouslySetInnerHTML={{ __html: data[0].description }} />
          </div>
        </div>
      </section>
    )
  }
}

export default ContenidoSeguros
