import towns from '@/data/towns'
import Locations from '@/features/locations'

export default function Homepage({}) {
  return (
      <div className="md:mt-14 container mx-auto" aria-label='heading'>
        <h1 className="text-center md:text-left text-[60px]">World Traveller</h1>
        <Locations list={towns}/>
      </div>
  )
}

