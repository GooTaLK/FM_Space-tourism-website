import cn from 'classnames'
import styles from './destinationCard.module.css'
import utilsStyles from '@/styles/utils.module.css'
import Picture, { PictureProps } from '../picture'

type DestinationCardProps = PictureProps & {
  destinyName: string
  description: string
  avgDistance: string
  avgTime: string
}

function DestinationCard({
  destinyName,
  description,
  avgDistance,
  avgTime,
  imageSrc,
  imageAlt,
}: DestinationCardProps) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Picture
          imageSrc={imageSrc}
          imageAlt={imageAlt || 'Image of travel destiny'}
        />
      </div>
      <h1
        className={cn(
          utilsStyles.heading2,
          utilsStyles.uppercase,
          styles.title
        )}
      >
        {destinyName}
      </h1>
      <p className={utilsStyles.grayText}>{description}</p>
      <hr className={styles.separator} />
      <div className={styles.measures}>
        <div>
          <h2
            className={cn(
              utilsStyles.subHeading2,
              utilsStyles.grayText,
              utilsStyles.uppercase,
              styles.measureTitle
            )}
          >
            AVG. Distance
          </h2>
          <p className={cn(utilsStyles.subHeading1, utilsStyles.uppercase)}>
            {avgDistance}
          </p>
        </div>
        <div>
          <h2
            className={cn(
              utilsStyles.subHeading2,
              utilsStyles.grayText,
              utilsStyles.uppercase,
              styles.measureTitle
            )}
          >
            EST. Travel Time
          </h2>
          <p className={cn(utilsStyles.subHeading1, utilsStyles.uppercase)}>
            {avgTime}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DestinationCard
