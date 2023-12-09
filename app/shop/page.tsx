import { getShopPageProps } from "@/lib/shopifyGql"
import ProductRow from "../ui/molecules/ProductRow/ProductRow"
import { SingleCollectionType } from "@/lib/types"

const MainShopPage = async () => {
  const contentProps = await getShopPageProps()

  return (
    <section>
      {contentProps.map((item: SingleCollectionType) => {
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
