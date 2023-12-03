import Image from "next/image"
import styles from './herostyles.module.scss'
import { PortableText } from '@portabletext/react'
import { HeroImageType } from "./HeroTypes"
import { outfit } from "../../fonts"

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
    <div className={`${styles.content}  main-container`}>
      <h1 className={outfit.className} >{heroImage.heading}</h1>
      <PortableText value={heroImage.description} />
    </div>
  </div>
)

export default HeroComponent
