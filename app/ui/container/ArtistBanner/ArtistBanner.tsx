import Image from 'next/image'
import Link from "next/link"
import styles from "./artistbanner.module.scss"

const ArtistBanner = ({ artist }) => {
  const { pageHero } = artist
  return (
    <div className={styles.imageWrap}>
      <Image
        alt={''}
        src={artist.pageHero.heroImage.asset.url}
        fill
        className={styles.image}
      />
      <div className={styles.container}>
        <h2>{pageHero.eyebrow}</h2>
        <p className="h1">{pageHero.heading}</p>
        <Link href={artist.slug.current} className={`${styles.link} btn btn-ghost`}>
          Visit artist page
        </Link>
      </div>
    </div>
  )
}

export default ArtistBanner
