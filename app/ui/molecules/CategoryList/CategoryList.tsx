import { getHomePageProps } from '@/lib/shopifyGql'
import styles from './categoryList.module.scss'
import ImageLinkComponent from '../ImageLinks/ImageLinks'

const CategoryList = async () => {
  const pageProps = await getHomePageProps()
  const { edges } = pageProps.collections

  return <section>
    <ul className={`${styles.catList}`}>
      {edges.map((item: { node: any }) => {
        const { node } = item
        return (
          <li key={node.id}>
            <ImageLinkComponent data={node} type="shop/category" />
          </li>
        )
      })}
    </ul>
  </section>
}

export default CategoryList
