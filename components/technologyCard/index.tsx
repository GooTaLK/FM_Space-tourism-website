import cn from 'classnames'
import styles from './technologyCard.module.css'
import utilsStyles from '@/styles/utils.module.css'
import Picture, { PictureProps } from '../picture'

type TechnologyProps = PictureProps & {
  name: string
  description: string
}

function TechnologyCard({ imageSrc, name, description }: TechnologyProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Picture imageSrc={imageSrc} />
      </div>
      <div className={styles.data}>
        <p className={utilsStyles.uppercase}>The terminology...</p>
        <h1 className={cn(utilsStyles.heading3, utilsStyles.uppercase)}>
          {name}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TechnologyCard
