import Image from "next/image"
import Link from "next/link"
import styles from './featuredSubmissions.module.scss'
import { slugify } from "@/lib/utils/generalUtils"

const FeaturedSubmission = ({ item }: any) => (
  <div className={styles.wrapper}>
    <h3 className={`${styles.heading} highlight`}>{item.title}</h3>
    <Image
      alt={''}
      src={item.submissionImage.asset.url}
      className={styles.polaroid}
      width={400}
      height={400}
      placeholder="blur"
      blurDataURL={item.submissionImage.asset.metadata.lqip}
    />
    <div>
      <p>Happy Cat colors used:</p>
      {item.colors.length &&
        <ul className={styles.colorsList}>
          {item?.colors?.map((color: string) => {
            const display_color = color === 'jars' ? "Schnozzberry" : color
            return (
              <li key={color} className={styles.colorLinks}>
                <Link href={`/shop/${slugify(color)}`} className="flip-link">{display_color}</Link>
              </li>
            )
          })}
        </ul>}
      {item.otherColors && <>
        <p>Other colors used:</p><ul>
          {item.otherColors.map((color: string) => <li key={color}>
            {color}
          </li>)}
        </ul>
      </>
      }
    </div>
  </div>
)


export default FeaturedSubmission
