import SegurosCategory from '@/components/seguros/SegurosCategory'

const Seguros = () => {
  return (
    <main className='section_seguros'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 data-aos='fade-up' className='chillax'>
              Consulta tu seguro
            </h2>
          </div>
        </div>
      </div>
      <SegurosCategory />
    </main>
  )
}

export default Seguros
