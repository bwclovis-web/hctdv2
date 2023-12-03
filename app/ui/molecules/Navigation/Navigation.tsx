import sanityClient from "@/lib/sanityClient"
import { navigationQuery } from "@/queries/SanityQueries"
import Link from "next/link"
import { Key } from "react"
import styles from './navigation.module.scss'
import { chicle } from "../../fonts"

const Navigation = async () => {
  const data = await sanityClient.fetch(navigationQuery, { next: { revalidate: 3600 } })
  const navigation = data[0].mainNav

  return (
    <nav className={styles.navigation}>
      <Link href="/" className={`${chicle.className} ${styles.homeLink}`}>
        <span>Happy Cat</span>
        <span>Tie Dye</span>
      </Link>
      <ul className={styles.mainNav}>
        {navigation.map((item: { slug: { current: string }; _id: Key; pageTitle: string; }) => (
          <li key={item._id}>
            <Link href={`/${item.slug.current}`}>
              {item.pageTitle}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
