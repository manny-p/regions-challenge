import towns from '@/data/towns'
import Locations from '@/features/locations'

export default function Homepage({}) {
  return (
      <div className="mt-16 container mx-auto">
        <h1>World Traveller.</h1>

        <Locations list={towns}/>
      </div>
  )
}
