import SustentaHeader from '@/components/sustenta/SustentaHeader'
import ConversacionesImportantes from '@/components/sustenta/ConversacionesImportantes'
import ProgramaNext50 from '@/components/sustenta/ProgramaNext50'
import CountdownApertura from '@/components/sustenta/CountdownApertura'

const Sustenta = () => {
  return (
    <main className='section_sustenta'>
      <SustentaHeader />
      <ConversacionesImportantes />
      <ProgramaNext50 />
      <CountdownApertura />
    </main>
  )
}

export default Sustenta
