import { getShopPageProps } from "@/lib/shopifyGql"
import ImageLinkComponent from "../ui/molecules/ImageLinks/ImageLinks"
import { ProductType } from "@/lib/types"
import Link from "next/link"
import styles from './shopPageStyles.module.scss'

const MainShopPage = async () => {
  const contentProps = await getShopPageProps()

  const ProductRow = ({ data, currentItem }: ProductType) => (
    <div className={styles.listContainer}>
      <ul className="catList">
        {data.map(item => <ImageLinkComponent key={item.product.handle} data={item.product} type={""} />)}
      </ul>
      {data.length >= 4 && <Link href={`shop/category/${currentItem}`} className={styles.ctaLink}>{`shop more ${currentItem}`}</Link>}
    </div>
  )


  return (
    <section>
      {contentProps.map(item => {
        const { edges } = item.collection.products
        return edges.length ? (
          <div className="main-container">
            <h2>{item.collection.title}</h2>
            {item.collection.descriptionHtml && <div dangerouslySetInnerHTML={{ __html: item.collection.descriptionHtml }} />}
            <ProductRow data={edges} currentItem={item.collection.handle} />
          </div>) : null
      })}
    </section>
  )
}

export default MainShopPage
