"use client"

import { useContext } from "react"
import clsx from "clsx"
import Toast from "../Toast/Toast"

import styles from './CartButtonStyles.module.scss'
import { AddToCartProps } from "./AddToCartButtonTypes"
import ShopContext from "@/app/providers/mainProvider"

const AddToCartButton = ({ item }: AddToCartProps) => {
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
