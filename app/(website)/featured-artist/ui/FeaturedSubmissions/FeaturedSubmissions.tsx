import Image from "next/legacy/image"
import Link from "next/link"
import { slugify } from "@/lib/utils/generalUtils"

const FeaturedSubmission = ({ item }) => (
  <section>
    <h3>{item.title}</h3>
    <Image
      alt={''}
      src={item.submissionImage.asset.url}
      width={400}
      height={400}
      placeholder="blur"
      blurDataURL={item.submissionImage.asset.metadata.lqip}
    />
    <div>
      <p>Happy Cat colors used:</p>
      {item.colors.length &&
        <ul>
          {item?.colors?.map((color: string) => {
            const display_color = color === 'jars' ? "Schnozzberry" : color
            return (
              <li key={color}>
                <Link href={`/shop/${slugify(color)}`} className="tag-link block">{display_color}</Link>
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
  </section>
)


export default FeaturedSubmission
