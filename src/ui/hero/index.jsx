import Image from 'next/image'
import { format } from 'date-fns'
import styles from "./styles.module.css"
import log from 'tailwindcss/lib/util/log'

export default function Hero({teaser, startsAt, headline, location, tag}) {
  return (
      <section className="mt-7 relative flex items-center flex-wrap w-full bg-white">
        <div className={`${styles.image}  md:w-1/2 relative`}>
          <Image
              className="object-fit"
              layout="fill"
              src={`/images/${location.split(',')[0].toLowerCase()}.jpg`}
          />
          <div
              aria-label='tag'
              className={`${
                  tag === 'domestic' ? 'border-[#32C5FF]' : 'border-[#F7B500]'
              } absolute top-[10px] border-l-[6px] md:-left-[6px] font-[400] tracking-wide text-[14px] bg-white px-[8px] py-[4px]`}>
            {tag.toUpperCase()}
          </div>
        </div>
          <div className="md:h-full w-full md:w-1/2">
            <div className="h-full   p-8">
              <div className="text-gray-400 uppercase text-sm" aria-label='headline'>{headline}</div>
              <div className="text-[30px] font-[700] text-gray-800" aria-label='location'>{location}</div>
              <div className="font-medium text-gray-700" aria-label='starts-at'>
                {format(new Date(startsAt), 'MMMM\', \'dd\', \'yyyy')}
              </div>
              <div aria-label='teaser'>{teaser}</div>
            </div>
          </div>
      </section>


  )
}
