import { getHomePageProps } from '@/lib/shopifyGql'
import styles from './categoryList.module.scss'

const CategoryList = async () => {
  const pageProps = await getHomePageProps()
  const { edges } = pageProps.collections

  return <section>
    <ul className={`${styles.catList} main-container`}>
      {edges.map((item: { node: any }) => {
        const { node } = item
        return <li key={node.id}>{node.title}</li>
      })}
    </ul>
  </section>
}

export default CategoryList
