import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from '@/components/commons/ErrorInput'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '@/components/commons/Loader'

import { validationUnite } from '@/utils/dataUtils.js'

import styles from './unite.module.css'
import logo from '@/assets/img/unite/logo-elbin-large-white.svg'

const Unite = () => {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('ENVIAR')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    console.log(values)
    setLoading(true)
    setWordBtn('ENVIANDO...')
    const token = await executeRecaptcha('form_contacto')
    values.origin = 'Formulario de Unite al equipo'
    values.recaptchaToken = token

    try {
      const res = await axios.post(
        import.meta.env.VITE_ROOT + 'php/process.php',
        values,
      )

      const myJson = JSON.stringify(res.data)
      const responseData = JSON.parse(myJson)

      if (responseData.success) {
        toast.success(responseData.msg_success)
        resetForm()
      } else {
        responseData.errors.map(error => {
          return toast.error(error)
        })
      }
    } catch (error) {
      console.log(error)
      // Realizar acciones en caso de error
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
      )
    }

    setSubmitting(false)
    setLoading(false)
    setWordBtn('ENVIAR')
    resetForm()
  }

  const initFormDefault = {
    name: '',
    email: '',
    experiencia_seguros: '',
    experiencia_ventas: '',
    actualmente_trabajando: '',
    emprendiste: '',
    independiente: '',
  }

  return (
    <>
      {loading && <Loader />}
      <main className={`section_unite ${styles.section_unite}`}>
        {loading && <div>Loading...</div>}
        <ToastContainer />
        <div className='container'>
          <div className='row'>
            <div className={`col-lg-4 ${styles.content_data}`}>
              <img
                className={`img-fluid ${styles.logo}`}
                src={logo}
                alt='logo elbin'
              />
              <div className={`${styles.data}`}>
                <p className={`${styles.title}`}>¡Sumate al equipo!</p>
                <p className={`${styles.frase}`}>
                  En Elbin nuestro objetivo es transformar la vida de
                  nuestros/as asesores/as dándoles las mejores herramientas para
                  crecer en confianza, ganar experiencia y poder desarrollarse
                  en una profesión que es única.
                </p>
              </div>
            </div>

            <div className={`col-lg-8 ${styles.content_form}`}>
              <p className={`${styles.frase_encabezado}`}>
                A continuación, te pediremos algunos datos personales para poder
                evaluar tu perfil
              </p>

              <Formik
                initialValues={initFormDefault}
                validate={validationUnite}
                onSubmit={sendForm}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form id='form_contacto' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <Field
                        id='name'
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Nombre y apellido'
                        aria-describedby='nameHelp'
                      />
                      <ErrorMessage name='name' component={ErrorInput} />
                    </div>

                    <div className={`${styles.last_input}`}>
                      <Field
                        id='email'
                        className='form-control'
                        type='email'
                        name='email'
                        placeholder='Email'
                        aria-describedby='emailHelp'
                      />
                      <ErrorMessage name='email' component={ErrorInput} />
                    </div>

                    <div className={`${styles.content_radios}`}>
                      <h4>Experiencia en seguros</h4>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='experiencia_seguros_si'
                        >
                          <Field
                            id='experiencia_seguros_si'
                            name='experiencia_seguros'
                            className='form-check-input'
                            type='radio'
                            value='si'
                          />
                          Si
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='experiencia_seguros_no'
                        >
                          <Field
                            id='experiencia_seguros_no'
                            name='experiencia_seguros'
                            className='form-check-input'
                            type='radio'
                            value='no'
                          />
                          No
                        </label>
                      </div>
                      <ErrorMessage
                        name='experiencia_seguros'
                        component={ErrorInput}
                      />
                    </div>

                    <div className={`${styles.content_radios}`}>
                      <h4>Experiencia en ventas intagibles</h4>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='experiencia_ventas_si'
                        >
                          <Field
                            id='experiencia_ventas_si'
                            name='experiencia_ventas'
                            className='form-check-input'
                            type='radio'
                            value='si'
                          />
                          Si
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='experiencia_ventas_no'
                        >
                          <Field
                            id='experiencia_ventas_no'
                            name='experiencia_ventas'
                            className='form-check-input'
                            type='radio'
                            value='no'
                          />
                          No
                        </label>
                      </div>
                      <ErrorMessage
                        name='experiencia_ventas'
                        component={ErrorInput}
                      />
                    </div>

                    <div className={`${styles.content_radios}`}>
                      <h4>¿Actualmente estas trabajando?</h4>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='actualmente_trabajando_si'
                        >
                          <Field
                            id='actualmente_trabajando_si'
                            name='actualmente_trabajando'
                            className='form-check-input'
                            type='radio'
                            value='si'
                          />
                          Si
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='actualmente_trabajando_no'
                        >
                          <Field
                            id='actualmente_trabajando_no'
                            name='actualmente_trabajando'
                            className='form-check-input'
                            type='radio'
                            value='no'
                          />
                          No
                        </label>
                      </div>
                      <ErrorMessage
                        name='actualmente_trabajando'
                        component={ErrorInput}
                      />
                    </div>

                    <div className={`${styles.content_radios}`}>
                      <h4>¿Alguna vez emprendiste?</h4>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='emprendiste_si'
                        >
                          <Field
                            id='emprendiste_si'
                            name='emprendiste'
                            className='form-check-input'
                            type='radio'
                            value='si'
                          />
                          Si
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='emprendiste_no'
                        >
                          No
                        </label>
                        <Field
                          id='emprendiste_no'
                          name='emprendiste'
                          className='form-check-input'
                          type='radio'
                          value='no'
                        />
                      </div>
                      <ErrorMessage name='emprendiste' component={ErrorInput} />
                    </div>

                    <div className={`${styles.content_radios}`}>
                      <h4>
                        ¿Te interesa un desarrollo profesional independiente?
                      </h4>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='independiente_si'
                        >
                          <Field
                            id='independiente_si'
                            name='independiente'
                            className='form-check-input'
                            type='radio'
                            value='si'
                          />
                          Si
                        </label>
                      </div>
                      <div className='form-check form-check-inline'>
                        <label
                          className='form-check-label'
                          htmlFor='independiente_no'
                        >
                          <Field
                            id='independiente_no'
                            name='independiente'
                            className='form-check-input'
                            type='radio'
                            value='no'
                          />
                          No
                        </label>
                      </div>
                      <ErrorMessage
                        name='independiente'
                        component={ErrorInput}
                      />
                    </div>

                    <div className={`${styles.content_btn}`}>
                      <button
                        id='send'
                        type='submit'
                        className={`transtition btn btn-primary ${styles.btn}`}
                        disabled={isSubmitting}
                      >
                        {wordBtn}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Unite
