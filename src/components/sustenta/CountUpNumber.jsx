import { useEffect, useRef, useState } from 'react'

const CountUpNumber = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.round(progress * target))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

export default CountUpNumber
