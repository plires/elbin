import styles from './longevidad-futuro-intro.module.css'

const stats = [
  {
    value: '+30',
    suffix: 'años',
    label: 'de vida ganados en el último siglo.',
  },
  {
    value: '-50',
    suffix: '%',
    label: 'de caída en la natalidad global desde 1960.',
  },
  {
    value: '2036',
    suffix: '',
    label: 'el primer año con más personas de 60+ que menores de 10.',
  },
  {
    value: '52',
    suffix: '%',
    label:
      'de los empleados serán mayores de 65 hacia 2080, en alza desde 1980.',
  },
  {
    value: '40',
    suffix: '%',
    label: 'del consumo mundial lo define la Generación Silver (50+).',
  },
]

const LongevidadFuturoIntro = () => {
  return (
    <div className={styles.intro}>
      <p>
        Durante décadas nos prepararon para un modelo de vida lineal que ya no
        existe: estudiar, trabajar y jubilarse. Sin embargo, la revolución de la
        longevidad está creando una nueva etapa profesional para millones de
        personas.
      </p>

      <div className={`row ${styles.stats}`}>
        {stats.map((stat, index) => (
          <div key={index} className={`col-6 col-md ${styles.stat}`}>
            <p className={`chillax ${styles.value}`}>
              {stat.value}
              <span className={styles.suffix}>{stat.suffix}</span>
            </p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>

      <p>
        En Elbin transformamos este desafío en una gran oportunidad. A través de
        programas innovadores como Next 50, impulsamos una nueva generación de
        arquitectos financieros y generamos las soluciones estratégicas
        necesarias para que vivir más años sea sinónimo de estabilidad, disfrute
        y reinvención constante, sin comprometer tu tranquilidad económica.
      </p>
    </div>
  )
}

export default LongevidadFuturoIntro
