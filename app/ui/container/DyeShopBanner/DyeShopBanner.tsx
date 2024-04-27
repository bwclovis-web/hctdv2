import Image from 'next/image'
import Link from "next/link"
import styles from './dyeshopstyles.module.scss'

const DyeShopBanner = () => (
  <div className={styles.imageWrap}>
    <Image
      alt={''}
      src="/images/dyes.jpg"
      fill
      className={styles.image}
    />
    <div className={styles.container}>
      <h2>Custom Dye Shop</h2>
      <p>Custom blended colors for all your dyeing needs.</p>
      <Link href="/shop/category/dyes" className={`${styles.link} btn btn-green`}>
        Go to dye shop
      </Link>
    </div>
  </div>
)

export default DyeShopBanner
