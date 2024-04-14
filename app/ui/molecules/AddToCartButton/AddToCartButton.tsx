"use client"

import { useContext } from "react"
import Link from "next/link"
import clsx from "clsx"
import Toast from "../Toast/Toast"

import { AddToCartProps } from "./AddToCartButtonTypes"
import ShopContext from "@/app/providers/mainProvider"


import styles from './CartButtonStyles.module.scss'

const AddToCartButton = ({ item }: AddToCartProps) => {
  const { cartDisplayPrice, thisVariantId, addVariantToCart, numItemsInCart } = useContext(ShopContext)
  const ButtonClasses = clsx({
    "btn ": true,
    "btn-default": cartDisplayPrice,
    "btn-disabled": !cartDisplayPrice
  })

  const handleAddToCart = () => {
    addVariantToCart(thisVariantId)
  }

  return (
    <div className={styles.cartButtonContainer}>
      <button
        className={ButtonClasses}
        disabled={!cartDisplayPrice}
        onClick={evt => handleAddToCart()}
      >
        Add To Cart {cartDisplayPrice}
      </button>
      <Link href="/shop" className="btn btn-ghost">Continue Shopping</Link>
      {numItemsInCart > 0 && <Link href="/shop/cart" className="btn btn-green">view cart</Link>}
      <Toast item={item} />
    </div>
  )
}

export default AddToCartButton
