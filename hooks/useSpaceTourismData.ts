import { useRef } from 'react'
import data from '@/data/data.json'

type Props = {
  type: 'destinations' | 'crew' | 'technology'
}

function useSpacetourismData({ type }: Props) {
  const dataRef = useRef(data[type])
  const dataIndexRef = useRef(0)

  function getData(property: string, property2?: string) {
    if (property === 'images') {
      const images: { [index: string]: string } =
        dataRef.current[dataIndexRef.current].images

      if (property2) {
        return images[property2]
      }
      return undefined
    }

    const data: { [index: string]: any } = dataRef.current[dataIndexRef.current]

    return data[property]
  }

  return { dataRef, dataIndexRef, getData }
}

export default useSpacetourismData
