"use client"

import ShopContext from "@/app/providers/mainProvider"
import { useContext } from "react"
import CartListItems from "./ui/CartItems"
import styles from './cartPage.module.scss'
import CartDetails from "./ui/CartDetails"

const CartPage = () => {
  const { checkout, updateLineItem } = useContext(ShopContext)
  const updateLineItems = (evt, id) => {
    updateLineItem(checkout.id, id, evt.target.value)
  }
  return (
    <section >
      <div className={styles.shopPageContainer}>
        <ul>
          {
            checkout.lineItems.map(lineItem => <CartListItems item={lineItem} update={updateLineItems} key={lineItem.id} />)
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
