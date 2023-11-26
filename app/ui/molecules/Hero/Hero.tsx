import Image from "next/image"
import styles from './herostyles.module.scss'
import { HeroImageType } from "./HeroTypes"
import { chicle } from "../../fonts"

const HeroComponent = ({ heroImage }: HeroImageType) => (
  <div className={styles.hero}>
    <Image
      alt={''}
      src={heroImage.heroImage.asset.url}
      fill
      sizes="100vw"
      placeholder="blur"
      priority
      className={styles.hero}
      blurDataURL={heroImage.heroImage.asset.metadata.lqip}
    />
    <div className={styles.content}>
      <p className={chicle.className} >{heroImage.heading}</p>
    </div>
  </div>
)

export default HeroComponent
