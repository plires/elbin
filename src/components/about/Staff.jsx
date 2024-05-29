import CardMember from '@/components/about/CardMember'
import { getStaff } from '@/utils/dataUtils.js'

import styles from './staff.module.css'

const Staff = () => {
  const staff = getStaff('staff')

  return (
    <section className={`container ${styles.staff}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h2 data-aos='fade-up' className='chillax'>
            Staff
          </h2>
        </div>
      </div>
      <div className='row'>
        {staff.map(item => (
          <div key={item.id} className='col-6 col-md-4 col-lg-3'>
            <CardMember item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Staff
