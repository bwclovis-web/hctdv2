import Image from "next/image"
import styles from "../cartPage.module.scss"
import { formatPrice } from "@/lib/utils/formatPrice"
import { CartItemProps } from "./CartDetailTypes"

const CartListItems = ({ item, update }: CartItemProps) => {
  const { attrs, image } = item.variant
  const { value } = attrs.selectedOptions[0]
  const { amount, currencyCode } = attrs.priceV2

  return (
    <li className={styles.shopPageItem}>
      <div>
        <Image
          src={image.src} width={200} height={200} alt=""
        />
      </div>
      <div className="">
        <span className="h3">{item.title}</span>
        <span>Size: {value}</span>
        <input type="number" value={item.quantity} onChange={evt => update(evt, item.id)} />
        <span>{formatPrice(amount, currencyCode)} ea.</span>
        <span>Item total: {formatPrice(amount * item.quantity, currencyCode)}</span>
      </div>
      <div>pig</div>
    </li>
  )
}

export default CartListItems
