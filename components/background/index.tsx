import styles from './background.module.css'

type BackgoundProps = {
  src: { desktop: string; tablet: string; mobile: string }
  alt?: string
}

function Background({ src, alt }: BackgoundProps) {
  return (
    <picture className={styles.container}>
      <source srcSet={src.desktop} media='(min-width: 1440px)' />
      <source
        srcSet={src.tablet}
        media='(min-width: 768px) and (max-width: 1439px)'
      />
      <source srcSet={src.mobile} media='(max-width: 767px)' />
      <img src={src.desktop} alt={alt || 'Page background'} />
    </picture>
  )
}

export default Background
