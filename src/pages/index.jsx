import towns from '@/data/towns'
import Locations from '@/features/locations'

export default function Homepage({}) {
  return (
      <div className="mt-14  container mx-auto" aria-label='heading'>
        <h1>World Traveller</h1>
        <Locations list={towns}/>
      </div>
  )
}
