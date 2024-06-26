import testimonios from '@/data/testimonios.json'
import galery from '@/data/galery.json'
import trayectoria from '@/data/trayectoria.json'
import featuresHome from '@/data/features-home.json'
import featuresAbout from '@/data/features-about.json'
import staff from '@/data/staff.json'
import lideresEquipo from '@/data/lideres-equipo.json'
import seguros from '@/data/seguros.json'
import segurosPersonalesCapitalizacion from '@/data/seguros-personales-capitalizacion.json'
import segurosPersonalesGeneralesPatrimoniales from '@/data/seguros-personales-generales-patrimoniales.json'
import segurosPersonalesVida from '@/data/seguros-personales-vida.json'
import segurosCorporativosCapitalizacion from '@/data/seguros-corporativos-capitalizacion.json'
import segurosCorporativosGenerales from '@/data/seguros-corporativos-generales.json'
import segurosCorporativosContinuidadSocietaria from '@/data/seguros-corporativos-continuidad-societaria.json'
import contactos from '@/data/contactos.json'
import blindaje from '@/data/proceso-blindaje.json'

export const getTestimonios = key => testimonios[key]
export const getGalery = key => galery[key]
export const getTrayectoria = key => trayectoria[key]
export const getFeaturesHome = key => featuresHome[key]
export const getFeaturesAbout = key => featuresAbout[key]
export const getStaff = key => staff[key]
export const getLideresEquipo = key => lideresEquipo[key]
export const getSeguros = key => seguros[key]
export const getSegurosPersonalesCapitalizacion = key =>
  segurosPersonalesCapitalizacion[key]
export const getSegurosPersonalesGeneralesPatrimoniales = key =>
  segurosPersonalesGeneralesPatrimoniales[key]
export const getSegurosPersonalesVida = key => segurosPersonalesVida[key]
export const getSegurosCorporativosCapitalizacion = key =>
  segurosCorporativosCapitalizacion[key]
export const getSegurosCorporativosGenerales = key =>
  segurosCorporativosGenerales[key]
export const getSegurosCorporativosContinuidadSocietaria = key =>
  segurosCorporativosContinuidadSocietaria[key]
export const getContactos = key => contactos[key]
export const getProcesoBlindaje = key => blindaje[key]

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu mensaje'
  }
  return errors
}

export const validationUnite = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }

  if (!values.emprendiste) {
    errors.emprendiste = 'Elegí una opción'
  }

  if (!values.experiencia_seguros) {
    errors.experiencia_seguros = 'Elegí una opción'
  }

  if (!values.actualmente_trabajando) {
    errors.actualmente_trabajando = 'Elegí una opción'
  }

  if (!values.experiencia_ventas) {
    errors.experiencia_ventas = 'Elegí una opción'
  }

  if (!values.independiente) {
    errors.independiente = 'Elegí una opción'
  }

  return errors
}

export const getLink = link => {
  var linkToAttribute = '#'

  switch (link) {
    case 'whatsapp':
      linkToAttribute = import.meta.env.VITE_LINK_TO_WHATSAPP
      break
    case 'mail':
      linkToAttribute = import.meta.env.VITE_MAILTO
      break
    case 'address':
      linkToAttribute = import.meta.env.VITE_ADDRESS
      break

    default:
      linkToAttribute = '#'
  }
  return linkToAttribute
}
