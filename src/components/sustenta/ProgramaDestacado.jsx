import styles from './programa-destacado.module.css'

const ProgramaDestacado = ({
  image,
  imageAlt,
  logo,
  logoAlt,
  title,
  description,
  partnerGroups,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <div data-aos='fade-up' className={`row ${styles.programa}`}>
      <div className={`col-lg-6 ${styles.contentImage}`}>
        <img
          className={`img-fluid ${styles.image}`}
          src={image}
          alt={imageAlt}
        />
      </div>

      <div className={`col-lg-6 ${styles.content}`}>
        <img className={styles.logo} src={logo} alt={logoAlt} />

        <h3 className={`chillaxSemiBold ${styles.title}`}>{title}</h3>

        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {partnerGroups?.length > 0 && (
          <div className={styles.partnerGroups}>
            {partnerGroups.map((group, groupIndex) => (
              <div key={groupIndex} className={styles.partnerGroup}>
                {group.label && (
                  <span className={styles.partnersLabel}>{group.label}</span>
                )}
                <div className={styles.partnersLogos}>
                  {group.partners.map((partner, index) => (
                    <img key={index} src={partner.src} alt={partner.alt} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.ctas}>
          {primaryCta && (
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={primaryCta.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {primaryCta.text}
            </a>
          )}
          {secondaryCta && (
            <a
              className={`${styles.btn} ${styles.btnOutline}`}
              href={secondaryCta.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProgramaDestacado
