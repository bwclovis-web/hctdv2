import styles from './categoryList.module.scss'
import ImageLinkComponent from '../ImageLinks/ImageLinks'

const CategoryList = async ({ data, heading }: any) => {
  const { edges } = data

  return (
    <section className={`${styles.cat_wrapper}`}>
      {heading ? <h2 className={`${styles.heading} main-container`}>{heading}</h2> : null}
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
  )
}

export default CategoryList
