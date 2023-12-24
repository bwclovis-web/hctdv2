import Image from "next/image"
import styles from "../cartPage.module.scss"
import { formatPrice } from "@/lib/utils/formatPrice"
import { CartItemProps } from "./CartDetailTypes"
import { useRef } from "react"
import { FaPlus, FaMinus, FaTimesCircle } from "react-icons/fa"

const CartListItems = ({ item, update, deleteItem }: CartItemProps) => {
  const { attrs, image } = item.variant
  const { value } = attrs.selectedOptions[0]
  const { amount, currencyCode } = attrs.priceV2
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = (direction: string) => {
    let value
    if (inputRef.current) {
      direction === 'inc' ? inputRef.current.stepUp() : inputRef.current.stepDown()
      value = inputRef.current.value
      update(value, item.id)
    }
  }
  return (
    <li className={styles.shopPageItem}>
      <div>
        <Image
          src={image.src} width={200} height={200} alt=""
        />
      </div>
      <div>
        <span className="h3">{item.title}</span>
        {value &&
          <>
            <span>Size: {value}</span>
            <label htmlFor="num-in-cart">Amount in cart:</label>
            <input id="num-in-cart" type="number" value={item.quantity} ref={inputRef} readOnly />
            <span>{formatPrice(amount, currencyCode)} ea.</span>
          </>
        }
        <span>Item total: {formatPrice(amount * item.quantity, currencyCode)}</span>
      </div>
      <div className={styles.shopItemControls}>
        {value &&
          <>
            <button onClick={() => handleClick('inc')} className="btn-green" aria-label={`add another ${value} ${item.title} to cart`}>
              <FaPlus size={20} />
            </button>
            <button onClick={() => handleClick('dec')} className="btn-green" aria-label={`remove one ${value} ${item.title} from cart`}>
              <FaMinus size={20} />
            </button>
          </>
        }
        <button className="btn-red" onClick={() => deleteItem(item.id)} aria-label={`remove all ${value} ${item.title} from cart`}>
          <FaTimesCircle size={30} />
        </button>
      </div>
    </li>
  )
}

export default CartListItems
