import cn from 'classnames'
import styles from './crewCard.module.css'
import utilsStyles from '@/styles/utils.module.css'
import Picture, { PictureProps } from '../picture'

type CrewCardProps = PictureProps & {
  crewmateName: string
  crewmateRole: string
  bio: string
}

function CrewCard({
  imageSrc,
  imageAlt,
  crewmateName,
  crewmateRole,
  bio,
}: CrewCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Picture imageSrc={imageSrc} imageAlt={imageAlt || 'Crew Photo'} />
      </div>
      <h2
        className={cn(styles.role, utilsStyles.heading4, utilsStyles.uppercase)}
      >
        {crewmateRole}
      </h2>
      <h1
        className={cn(
          styles.crewmateName,
          utilsStyles.heading3,
          utilsStyles.uppercase
        )}
      >
        {crewmateName}
      </h1>
      <p className={cn(styles.bio, utilsStyles.grayText)}>{bio}</p>
    </div>
  )
}

export default CrewCard
