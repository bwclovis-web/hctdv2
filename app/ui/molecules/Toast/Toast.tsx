import { useContext } from "react"
import clsx from "clsx"
import ShopContext from "@/app/providers/mainProvider"

import styles from './Toast.module.scss'
import { AddToCartProps } from "../AddToCartButton/AddToCartButtonTypes"

const Toast = ({ item }: AddToCartProps) => {
  const { cartDisplayPrice, showToast } = useContext(ShopContext)

  const ToastClasses = clsx({
    [styles.toast]: true,
    [styles.toastOpen]: showToast,
  })

  return (
    <div className={ToastClasses}>
      <p>
        <b>{item.title}</b> has been added to cart</p>
      <p className="mt-1"><b>Price:</b> {cartDisplayPrice}</p>
    </div>
  )
}

export default Toast 
