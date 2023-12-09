import Image from "next/image"
import styles from './herostyles.module.scss'
import { HeroImageType } from "./HeroTypes"

const ProductHeroComponent = ({ heroImage }: HeroImageType) => (
  <div className={styles.productHero}>
    <Image
      alt={''}
      src={heroImage.featuredImage.url}
      width={1400}
      height={460}
      sizes="100vw"
      priority
      className={styles.productHeroImage}
    />
  </div>
)

export default ProductHeroComponent
