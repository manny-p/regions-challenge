import { useState } from 'react'
import Hero from '@/ui/hero'
import Town from './town'
import styles from './style.module.css'

export default function Locations({list}) {
  const [query, setQuery] = useState('')
  const hero = list[0]

  const towns = list.slice(1, list.length)


  return (
      <>

        <Hero {...hero} />
        <div className={styles["town-list-container"]}>
          {towns.map((town) => (
              <Town key={town.location}{...town} />
          ))}
        </div>
      </>
  )
}


