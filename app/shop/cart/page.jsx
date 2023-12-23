"use client"

import ShopContext from "@/app/providers/mainProvider"
import { useContext } from "react"
import CartListItems from "./ui/CartItems"
import styles from './cartPage.module.scss'
import CartDetails from "./ui/CartDetails"

const CartPage = () => {
  const { checkout, updateLineItem, removeLineItem } = useContext(ShopContext)
  const updateLineItems = (amount, id) => {
    updateLineItem(checkout.id, id, amount)
  }
  const removeItemFromCart = id => {
    removeLineItem(checkout.id, id)
  }
  return (
    <section >
      <div className={styles.shopPageContainer}>
        <ul>
          {
            checkout.lineItems.map(lineItem => <CartListItems item={lineItem} update={updateLineItems} key={lineItem.id} deleteItem={removeItemFromCart} />)
          }
        </ul>
        <div className={styles.cartDetails}>
          <CartDetails data={checkout} />
        </div>
      </div>
    </section>
  )
}

export default CartPage
