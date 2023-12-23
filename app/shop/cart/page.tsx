"use client"

import ShopContext from "@/app/providers/mainProvider"
import { Key, useContext } from "react"
import CartListItems from "./ui/CartItems"
import styles from './cartPage.module.scss'
import CartDetails from "./ui/CartDetails"

const CartPage = () => {
  const { checkout, updateLineItem } = useContext(ShopContext)
  const updateLineItems = (evt: { target: { value: any } }, id: any) => {
    updateLineItem(checkout.id, id, evt.target.value)
  }
  return (
    <section >
      <div className={styles.shopPageContainer}>
        <ul>
          {
            checkout.lineItems.map((lineItem: { id: Key }) => <CartListItems item={lineItem} update={updateLineItems} key={lineItem.id} />)
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
