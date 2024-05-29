import { Link } from 'react-router-dom'
import styles from './breadcrumb.module.css'

const BreadcrumbSeguros = ({ path, pathactual }) => {
  return (
    <section className={`container ${styles.breadcrumb}`}>
      <div className='row'>
        <div className='col-md-12'>
          <h3>
            <Link className='transition' to='/seguros'>
              {path}
            </Link>
            <span>{pathactual}</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbSeguros
