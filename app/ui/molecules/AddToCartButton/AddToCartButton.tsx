"use client"

import { useContext } from "react"
import ShopContext from "@/app/providers/mainProvider"
import clsx from "clsx"
import styles from './CartButtonStyles.module.scss'

const AddToCartButton = () => {
  const { cartDisplayPrice } = useContext(ShopContext)
  const ButtonClasses = clsx({
    [styles.cartButton]: true,
    [styles.disabled]: !cartDisplayPrice
  })

  return <button className={ButtonClasses} disabled={!cartDisplayPrice}>Add To Cart {cartDisplayPrice}</button>
}

export default AddToCartButton
