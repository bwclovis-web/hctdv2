"use client"

import ShopContext from "@/app/providers/mainProvider"
import { useContext } from "react"
import CartListItems from "./ui/CartItems"
import styles from './cartPage.module.scss'
import CartDetails from "./ui/CartDetails"
import EmptyCart from "./ui/EmptyCart"

const CartPage = () => {
  const { checkout, updateLineItem, removeLineItem, isFetchingCart } = useContext(ShopContext)
  const { lineItems } = checkout
  const updateLineItems = (amount, id) => {
    updateLineItem(checkout.id, id, amount)
  }
  const removeItemFromCart = id => {
    removeLineItem(checkout.id, id)
  }

  if (isFetchingCart) {
    return (
      <div className="main-container">
        <h1>Hang tight</h1>
        <p>Fetching Cart</p>
      </div>
    )
  }

  if(!lineItems.length) {
    return <EmptyCart />
  }
  return (
    <section className="main-container">
      <h1 className="h2">You have {lineItems.length} items in cart</h1>
      <div className={`${styles.shopPageContainer}`}>
        <div>
          
          <ul>
            {
              lineItems.map(lineItem => <CartListItems item={lineItem} update={updateLineItems} key={lineItem.id} deleteItem={removeItemFromCart} />)
            }
          </ul>
        </div>
        <div className={styles.cartDetails}>
          <CartDetails data={checkout} />
        </div>
      </div>
    </section>
  )
}

export default CartPage
