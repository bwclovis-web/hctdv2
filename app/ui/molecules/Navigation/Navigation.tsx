import sanityClient from "@/lib/sanityClient"
import { navigationQuery } from "@/queries/SanityQueries"
import Link from "next/link"
import styles from './navigation.module.scss'
import clsx from "clsx"
import MainLogo from "../../Atoms/MainLogo/MainLogo"


const Navigation = async () => {
  const data = await sanityClient.fetch(navigationQuery, { next: { revalidate: 3600 } })
  const navigation = data[0].mainNav

  return (
    <nav className={styles.navigation}>
      <MainLogo />
      <ul className={styles.mainNav}>
        {navigation.map((item: { slug: { current: string }; _id: string; pageTitle: string; }) => (
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
