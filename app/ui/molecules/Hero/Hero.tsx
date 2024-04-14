import Image from "next/image"
import styles from './herostyles.module.scss'
import { PortableText } from '@portabletext/react'
import { HeroImageType } from "./HeroTypes"
import { outfit } from "../../fonts"

const HeroComponent = ({ heroImage }: HeroImageType) => (
  <div className={styles.hero}>
    <div className={styles.heroImage}>
      <Image
        alt={''}
        src={heroImage.heroImage.asset.url}
        fill
        quality={100}
        sizes="(min-width: 1080px) 70vw, 100vw"
        placeholder="blur"
        priority
        style={{
          objectFit: 'cover', // cover, contain, none
        }}

        blurDataURL={heroImage.heroImage.asset.metadata.lqip}
      />
    </div>
    <div className={`${styles.content}  main-container`}>
      <h1 className={outfit.className} >{heroImage.heading}</h1>
      <PortableText value={heroImage.description} />
    </div>
  </div>
)

export default HeroComponent
