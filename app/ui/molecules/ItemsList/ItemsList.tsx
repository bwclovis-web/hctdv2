import { ProductType } from "@/lib/types"
import ImageLinkComponent from "../ImageLinks/ImageLinks"
import Link from "next/link"

const ProductRow = ({ products, currentItem }: ProductType) => (
  <div>
    <ul className="catList">
      {products.map(item => <ImageLinkComponent key={item.product.handle} data={item.product} type={""} />)}
    </ul>
    {products.length >= 4 && <Link href={`shop/category/${currentItem}`}>{`shop more ${currentItem}`}</Link>}
  </div>
)

export default ProductRow
