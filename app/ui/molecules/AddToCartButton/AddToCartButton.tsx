"use client"

import { useContext } from "react"
import ShopContext from "@/app/providers/mainProvider"
import clsx from "clsx"
import styles from './CartButtonStyles.module.scss'
import Toast from "../Toast/Toast"

const AddToCartButton = ({ item }) => {
  const { cartDisplayPrice, thisVariantId, addVariantToCart } = useContext(ShopContext)
  const ButtonClasses = clsx({
    [styles.cartButton]: true,
    [styles.disabled]: !cartDisplayPrice
  })

  const handleAddToCart = () => {
    addVariantToCart(thisVariantId)
  }
  return <>
    <button
      className={ButtonClasses}
      disabled={!cartDisplayPrice}
      onClick={evt => handleAddToCart()}
    >
      Add To Cart {cartDisplayPrice}
    </button>
    <Toast item={item} />
  </>
}

export default AddToCartButton
