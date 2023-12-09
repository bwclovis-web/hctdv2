import { ProductType } from "@/lib/types"
import ImageLinkComponent from "../ImageLinks/ImageLinks"
import Link from "next/link"

const ProductRow = ({ data, currentItem }: ProductType) => (
  <div>
    <ul className="catList">
      {data.map(item => <ImageLinkComponent key={item.product.handle} data={item.product} type={""} />)}
    </ul>
    {data.length >= 4 && <Link href={`shop/category/${currentItem}`}>{`shop more ${currentItem}`}</Link>}
  </div>
)

export default ProductRow
