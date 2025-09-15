import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from '@/components/commons/ErrorInput'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '@/components/commons/Loader'

import CardFeature from '@/components/home/CardFeature'
import { getContactos, validation } from '@/utils/dataUtils.js'

import styles from './contacto.module.css'

const Contacto = () => {
  const data = getContactos('contactos')
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('ENVIAR')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')
    const token = await executeRecaptcha('form_contacto')
    values.origin = 'Formulario de Contacto'
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
    company: '',
    phone: '',
    comments: '',
  }

  return (
    <>
      {loading && <Loader />}
      <main className={`section_contacto container ${styles.section_contacto}`}>
        <div className={`row ${styles.content_form}`}>
          <div className='col-md-12'>
            <h2 className='chillax'>Dejanos tu mensaje</h2>
          </div>
          <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
            <Formik
              initialValues={initFormDefault}
              validate={validation}
              onSubmit={sendForm}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form
                  className='row g-3'
                  id='form_contacto'
                  onSubmit={handleSubmit}
                >
                  <div className='col-lg-6'>
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

                  <div className='col-lg-6'>
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

                  <div className='col-lg-6'>
                    <Field
                      id='company'
                      className='form-control'
                      type='text'
                      name='company'
                      placeholder='Empresa'
                      aria-describedby='companyHelp'
                    />
                    <ErrorMessage name='company' component={ErrorInput} />
                  </div>

                  <div className='col-lg-6'>
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

                  <div className='col-lg-12'>
                    <Field
                      id='comments'
                      className='form-control'
                      as='textarea'
                      name='comments'
                      rows='4'
                      placeholder='Mensaje'
                    />

                    <ErrorMessage name='comments' component={ErrorInput} />
                  </div>

                  <div className={`col-lg-12 ${styles.content_btn}`}>
                    <button
                      id='send'
                      type='submit'
                      className={`btn btn-primary ${styles.btn_enviar}`}
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
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='chillax'>Contactanos</h2>
          </div>
          {data.map(item => {
            return (
              <div
                data-aos='fade-up'
                key={item.id}
                className={` col-md-4 ${styles.content_article}`}
              >
                <CardFeature item={item} type='small' />
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Contacto
