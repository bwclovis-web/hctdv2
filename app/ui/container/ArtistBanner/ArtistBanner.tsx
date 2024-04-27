import Image from 'next/image'
import Link from "next/link"
import styles from "./artistbanner.module.scss"

const ArtistBanner = ({ artist }: any) => {
  const { pageHero } = artist
  return (
    <div className={styles.imageWrap}>
      <Image
        alt={''}
        src={pageHero.heroImage.asset.url}
        fill
        placeholder="blur"
        className={styles.image}
        blurDataURL={pageHero.heroImage.asset.metadata.lqip}
      />
      <div className={styles.container}>
        <h2>{pageHero.eyebrow}</h2>
        <p className="h1">{pageHero.heading}</p>
        <Link href={"/featured-artist"} className={`${styles.link} btn btn-ghost`}>
          Visit artist page
        </Link>
      </div>
    </div>
  )
}

export default ArtistBanner
