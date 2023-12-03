import Image from "next/image"
import Link from "next/link"
import styles from './ImageLinkStyles.module.scss'
import { ImageLinkType } from "./ImageLinkData"

const ImageLinkComponent = ({ data, type }: ImageLinkType) => (
  <Link href={`${type}/${data.handle}`} className={styles.imageLink}>
    <Image
      width={240}
      alt=""
      height={240}
      src={data.image.url}
    />
    <span>{data.title}</span>
  </Link>
)

export default ImageLinkComponent
