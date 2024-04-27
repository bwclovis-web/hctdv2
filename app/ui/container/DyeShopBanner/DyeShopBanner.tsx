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
      <h2 className="text-h2-dynamic font-display leading-none pb-2">Custom Dye Shop</h2>
      <p className="text-xl font-semibold tracking-wide mb-8 text-center">Custom blended colors for all your dyeing needs.</p>
      <Link href="/shop/category/dyes" className={`${styles.link} btn btn-green`}>
        Go to dye shop
      </Link>

    </div>
  </div>
)

export default DyeShopBanner
