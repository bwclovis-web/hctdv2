import { getShopPageProps } from "@/lib/shopifyGql"
import ImageLinkComponent from "../ui/molecules/ImageLinks/ImageLinks"

const MainShopPage = async () => {
  const contentProps = await getShopPageProps()

  const ProductRow = ({ products }) => (
    <ul className="catList">
      {products.map(item => <ImageLinkComponent key={item.product.handle} data={item.product} type={""} />)}
    </ul>
  )

  return (
    <section>
      {contentProps.map(item => {
        const { edges } = item.collection.products
        return edges.length ? (
          <div className="main-container">
            <h2>{item.collection.title}</h2>
            <ProductRow products={edges} />
          </div>) : null
      })}
    </section>
  )
}

export default MainShopPage
