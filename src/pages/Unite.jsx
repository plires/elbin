import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  context = 'no_set',
  titleForm = false,
  titleAside = false,
  descriptionAside = false,
  type = 'default',
  textBTN,
  titleLanding = '',
}) => {
  const { pathname } = useLocation()

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
      const data = JSON.parse(myJson)

      // Convierte errors a una LISTA segura para poder mapear
      const errorList = Array.isArray(data?.errors)
        ? data.errors
        : Object.entries(data?.errors ?? {}).map(([field, message]) => ({
            field,
            message,
          }))

      if (errorList.length > 0) {
        // ahora sí podés mapear sin explotar
        errorList.forEach(({ field, message }) => {
          toast.error(`${field}: ${message}`)
        })

        setSubmitting(false)
        setLoading(false)
        setWordBtn(textBTN)

        return // cortás el flujo de éxito
      }

      if (data.success) {
        toast.success(data.msg_success)

        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'form_sent',
          form_id: 'form_contacto',
          form_context: context || pathname, // ej: "/unite" o "landing"
          page_path: pathname, // ej: https://elbin.com.ar/landing
          page_title: document.title, // El titulo de la pagina
        })

        // 🔹 Si es landing, habilitamos el PDF
        if (type === 'landing') {
          setShowPDF(true)
        }

        resetForm()
      }
    } catch (error) {
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
    phone: '',
    city: '',
    ageRange: '',
    activity: '',
    experience: '',
    experiencia_asesorando: '',
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
                      <>
                        <div className='mb-3'>
                          <Field
                            id='phone'
                            className='form-control'
                            type='text'
                            name='phone'
                            placeholder='Teléfono'
                            aria-describedby='phoneHelp'
                          />
                          <ErrorMessage name='phone' component={ErrorInput} />
                        </div>

                        <div className='mb-3'>
                          <Field
                            id='city'
                            className='form-control'
                            type='text'
                            name='city'
                            placeholder='Ciudad'
                            aria-describedby='cityHelp'
                          />
                          <ErrorMessage name='city' component={ErrorInput} />
                        </div>

                        <div className='mb-3'>
                          <Field
                            as='select'
                            id='ageRange'
                            name='ageRange'
                            className='form-select'
                            aria-label='Rango de edad'
                          >
                            <option value=''>¿Cuántos años tenés?</option>
                            <option value='25_a_31_años'>25 a 31 años</option>
                            <option value='32_a_44_años'>32 a 44 años</option>
                            <option value='46_a_55_años'>46 a 55 años</option>
                          </Field>

                          <ErrorMessage
                            name='ageRange'
                            component={ErrorInput}
                          />
                        </div>

                        <div className='mb-3'>
                          <Field
                            id='activity'
                            className='form-control'
                            type='text'
                            name='activity'
                            placeholder='¿A qué te dedicás actualmente?'
                            aria-describedby='activityHelp'
                          />
                          <ErrorMessage
                            name='activity'
                            component={ErrorInput}
                          />
                        </div>

                        <div className='mb-3'>
                          <Field
                            id='experience'
                            className='form-control'
                            type='text'
                            name='experience'
                            placeholder='Experiencia previa'
                            aria-describedby='experienceHelp'
                          />
                          <ErrorMessage
                            name='experience'
                            component={ErrorInput}
                          />
                        </div>

                        <div className={`${styles.content_radios}`}>
                          <h4>
                            ¿tenés experiencia asesorando personas en temas
                            previsionales o financieros?
                          </h4>
                          <div className='form-check form-check-inline'>
                            <label
                              className='form-check-label'
                              htmlFor='experiencia_asesorando_si'
                            >
                              <Field
                                id='experiencia_asesorando_si'
                                name='experiencia_asesorando'
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
                              htmlFor='experiencia_asesorando_no'
                            >
                              <Field
                                id='experiencia_asesorando_no'
                                name='experiencia_asesorando'
                                className='form-check-input'
                                type='radio'
                                value='no'
                              />
                              No
                            </label>
                          </div>
                          <ErrorMessage
                            name='experiencia_asesorando'
                            component={ErrorInput}
                          />
                        </div>
                      </>
                    )}

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
