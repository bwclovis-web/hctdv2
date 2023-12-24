import Image from "next/image"
import Link from "next/link"
import styles from './ImageLinkStyles.module.scss'
import { ImageLinkType } from "./ImageLinkData"
import { formatPrice } from "@/lib/utils/formatPrice"
import clsx from "clsx"

const formatPriceRange = (data: { maxVariantPrice: any; minVariantPrice: any }) => {
  const { maxVariantPrice, minVariantPrice } = data
  return <span>{formatPrice(maxVariantPrice.amount, "USD")} - {formatPrice(minVariantPrice.amount, "USD")}</span>
}



const ImageLinkComponent = ({ data, type }: ImageLinkType) => {
  const ImageClassNames = clsx({
    [styles.imageLink]: true,
    [styles._disabled]: !data.availableForSale
  })

  return (
    <li>
      <Link href={`${type}/${data.handle}`} className={ImageClassNames}>
        <Image
          width={240}
          alt=""
          height={240}
          src={data?.image?.url ? data.image.url : data.featuredImage.url}
        />
        <div>
          <span>{data.title}</span>
          {data.priceRange && formatPriceRange(data.priceRange)}
          {!data.availableForSale && <span className="sr-only">currently out of stock</span>}
        </div>
      </Link>
    </li>
  )
}

export default ImageLinkComponent
