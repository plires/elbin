import { useEffect, useState } from 'react'
import styles from './countdown-apertura.module.css'
import { FECHA_PROXIMA_APERTURA } from './countdown-apertura.config'
import figuras from '@/assets/img/sustenta/figuras.webp'

const MESES = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

const getTimeLeft = () => {
  const diff = FECHA_PROXIMA_APERTURA.getTime() - Date.now()
  if (diff <= 0) return null

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = value => String(value).padStart(2, '0')

const CountdownApertura = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(() => {
        const next = getTimeLeft()
        if (!next) clearInterval(interval)
        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!timeLeft) return null

  const fechaLabel = `${FECHA_PROXIMA_APERTURA.getDate()} de ${
    MESES[FECHA_PROXIMA_APERTURA.getMonth()]
  } - Próxima Apertura`

  return (
    <section className={styles.countdown}>
      <div className='container'>
        <div className={styles.content}>
          <span className={styles.badge}>{fechaLabel}</span>

          <div className={styles.timer}>
            <div className={styles.timerBlock}>
              <span className={styles.timerValue}>{pad(timeLeft.days)}</span>
              <span className={styles.timerLabel}>Días</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerValue}>{pad(timeLeft.hours)}</span>
              <span className={styles.timerLabel}>Horas</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerValue}>{pad(timeLeft.minutes)}</span>
              <span className={styles.timerLabel}>Minutos</span>
            </div>
            <div className={styles.timerBlock}>
              <span className={styles.timerValue}>{pad(timeLeft.seconds)}</span>
              <span className={styles.timerLabel}>Segundos</span>
            </div>
          </div>

          <h3 className={`chillaxBold ${styles.title}`}>
            Asegurá tu lugar, anotate ahora
          </h3>

          <a
            className={styles.cta}
            href='https://docs.google.com/forms/d/e/1FAIpQLSeC2HtqPDlK-rxAtwLMEuSTOxBoVEl7vHpGsok1SBrpOzHhbw/viewform'
            target='_blank'
            rel='noopener noreferrer'
          >
            Postulate ahora
          </a>

          <span className={styles.hint}>Cupos limitados</span>
        </div>
      </div>

      <img className={styles.figuras} src={figuras} alt='' />
    </section>
  )
}

export default CountdownApertura
