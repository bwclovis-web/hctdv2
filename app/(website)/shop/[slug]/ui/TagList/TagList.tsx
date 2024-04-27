import Link from "next/link"
import styles from './TagList.module.scss'

type TagProps = {
  tags: []
}
const TagList = ({ tags }: TagProps) => (
  <div className="mt-10">
    <span>This product has been tagged:</span>
    <ul className={styles.tagList}>
      {tags.map((tag: string) => (
        <li key={tag} className="flex justify-start content-center">
          <Link href={`/shop/tags/${tag}`} className="tag-link">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default TagList
