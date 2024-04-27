import Link from "next/link"
import Image from "next/image"
import styles from './imageButton.module.scss'
const ImageButton = ({ linkData }) => {
  const { heroImage } = linkData.pageHero

  return (
    <Link href={`featured-artist/${linkData.slug.current}`} className={styles.container}>
      <div className={styles.overlay} />
      <Image
        alt={''}
        src={heroImage.asset.url}
        fill
        placeholder="blur"
        blurDataURL={heroImage.asset.metadata.lqip}
        className={styles.image}
      />
      <span className={styles.text}>{linkData.pageTitle}</span>
    </Link>
  )
}

export default ImageButton
