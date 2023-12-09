import Image from "next/image"
import Link from "next/link"
import styles from './ImageLinkStyles.module.scss'
import { ImageLinkType } from "./ImageLinkData"
import { formatPrice } from "@/lib/utils/formatPrice"

const formatPriceRange = (data: { maxVariantPrice: any; minVariantPrice: any }) => {
  const { maxVariantPrice, minVariantPrice } = data
  return <span>{formatPrice(maxVariantPrice.amount, "USD")} - {formatPrice(minVariantPrice.amount, "USD")}</span>
}

const ImageLinkComponent = ({ data, type }: ImageLinkType) => (
  <Link href={`${type}/${data.handle}`} className={styles.imageLink}>
    <Image
      width={240}
      alt=""
      height={240}
      src={data?.image?.url ? data.image.url : data.featuredImage.url}
    />
    <div>
      <span>{data.title}</span>
      {data.priceRange && formatPriceRange(data.priceRange)}
    </div>
  </Link>
)

export default ImageLinkComponent
