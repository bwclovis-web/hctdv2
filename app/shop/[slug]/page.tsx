import ProductHeroComponent from "@/app/ui/molecules/Hero/ProductHero"
import { getAllProductsQuery, getSingleProductPageProps } from "@/lib/shopifyGql"
import styles from './SingleProductPage.module.scss'
import PackingSelectorComponent from "@/app/ui/ProductPage/PackingSelector/PackingSelector"
import { DynamicPageType } from "@/lib/types"

export const generateStaticParams = async () => {
  const allProducts = await getAllProductsQuery()
  return allProducts.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}
const SingleProductPage = async ({ params }: DynamicPageType) => {
  const product = await getSingleProductPageProps(params.slug)
  const { variants } = product
  const variant = variants.edges

  return <>
    <ProductHeroComponent heroImage={product} />
    <section className={`${styles.singlePage} main-container`}>
      <div>
        <h1>{product.title}</h1>
        <PackingSelectorComponent data={variant} />
      </div>
    </section>
  </>
}

export default SingleProductPage
