import type { ComponentProps } from 'react'

type PictureProps = {
  imageSrc: {
    default: string
    sources?: ComponentProps<'source'>[]
  }
  imageAlt?: string
}

function Picture({ imageSrc, imageAlt }: PictureProps) {
  return (
    <picture>
      {imageSrc.sources?.map((props, index) => (
        <source {...props} key={index} />
      ))}
      <img src={imageSrc.default} alt={imageAlt || ''} />
    </picture>
  )
}

export default Picture
export { type PictureProps }
