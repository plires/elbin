import { useState } from 'react'
import PDFDownload from '@/components/landing/PDFDownload'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from '@/components/commons/ErrorInput'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/components/commons/Loader'
import { validationUnite } from '@/utils/dataUtils.js'

import bgUniteLanding from './../assets/img/landing/background-oficina.webp'
import logo from '@/assets/img/unite/logo-elbin-large-white.svg'

import styles from './unite.module.css'

const Unite = ({
  titleForm = false,
  titleAside = false,
  descriptionAside = false,
  type = 'default',
  textBTN,
  titleLanding = '',
}) => {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState(textBTN)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [showPDF, setShowPDF] = useState(false)

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')
    const token = await executeRecaptcha('form_contacto')
    if (type === 'default') {
      values.origin = 'Formulario de Unite al equipo'
    } else if (type === 'landing') {
      values.origin = 'Formulario de Landing Page'
    }
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

        // 🔹 Si es landing, habilitamos el PDF
        if (type === 'landing') {
          setShowPDF(true)
        }

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
    setWordBtn(textBTN)
    resetForm()
  }

  const initFormDefault = {
    name: '',
    email: '',
    phoneLinkedin: '',
    experiencia_seguros: '',
    experiencia_ventas: '',
    actualmente_trabajando: '',
    emprendiste: '',
    independiente: '',
  }

  return (
    <>
      {loading && <Loader />}
      <section
        data-aos='fade-up'
        style={
          type === 'landing'
            ? {
                background: `url(${bgUniteLanding})`,
              }
            : {}
        }
        className={`section_unite ${type === 'landing' ? styles.section_unite_landing : styles.section_unite}`}
      >
        {loading && <div>Loading...</div>}
        <div className='container'>
          {type === 'landing' && (
            <div className={`row ${styles.contentTitleLanding}`}>
              <div className='col-md-12'>
                <h2
                  dangerouslySetInnerHTML={{ __html: titleLanding }}
                  className={`chillaxBold ${styles.titleLanding}`}
                />
              </div>
            </div>
          )}

          <div className='row'>
            <div className={`col-lg-4 ${styles.content_data}`}>
              <img
                className={`img-fluid ${styles.logo}`}
                src={logo}
                alt='logo elbin'
              />
              <div>
                {titleAside && (
                  <p className={`${styles.title}`}>{titleAside}</p>
                )}
                {descriptionAside && (
                  <p
                    dangerouslySetInnerHTML={{ __html: descriptionAside }}
                    className={styles.frase}
                  />
                )}
              </div>
            </div>

            <div className={`col-lg-8 ${styles.content_form}`}>
              {titleForm && (
                <p
                  dangerouslySetInnerHTML={{ __html: titleForm }}
                  className={`${styles.frase_encabezado}`}
                />
              )}

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

                    <div className='mb-3'>
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

                    {type === 'landing' && (
                      <div className='mb-3'>
                        <Field
                          id='phoneLinkedin'
                          className='form-control'
                          type='text'
                          name='phoneLinkedin'
                          placeholder='Teléfono / Linkedin (opcional)'
                          aria-describedby='phoneLinkedinHelp'
                        />
                        <ErrorMessage
                          name='phoneLinkedin'
                          component={ErrorInput}
                        />
                      </div>
                    )}

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
      </section>

      {/* 🔹 Renderizado condicional del PDF */}
      {showPDF && <PDFDownload onClose={() => setShowPDF(false)} />}
    </>
  )
}

export default Unite
