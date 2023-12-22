import ProductHeroComponent from "@/app/ui/molecules/Hero/ProductHero"
import { getAllProductsQuery, getSingleProductPageProps } from "@/lib/shopifyGql"
import styles from './SingleProductPage.module.scss'
import PackingSelectorComponent from "@/app/ui/ProductPage/PackingSelector/PackingSelector"
import { DynamicPageType } from "@/lib/types"
import { Metadata } from "next"
import AddToCartButton from "@/app/ui/molecules/AddToCartButton/AddToCartButton"

export const generateStaticParams = async () => {
  const allProducts = await getAllProductsQuery()
  return allProducts.map((item: { node: { handle: any } }) => ({
    slug: item.node.handle
  }))
}

export const generateMetadata = async (params: { params: { slug: string } }): Promise<Metadata> => {
  const product = await getSingleProductPageProps(params.params.slug)
  return {
    title: product.title
  }
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
        <div className={styles.cartButton}>
          <AddToCartButton />
        </div>
      </div>
    </section>
  </>
}

export default SingleProductPage
