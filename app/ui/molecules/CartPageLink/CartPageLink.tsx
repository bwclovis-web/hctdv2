'use client'

import { useContext } from "react"
import Link from "next/link"
import clsx from 'clsx'
import ShopContext from "@/app/providers/mainProvider"
import { RiShoppingBasket2Line, RiShoppingBasket2Fill } from "react-icons/ri"
import styles from './CartPageLinkStyles.module.scss'

const CartPageLink = () => {
  const { numItemsInCart } = useContext(ShopContext)
  const CartLinkStyles = clsx({
    [styles.cartLink]: true,
    [styles.cartLinkFull]: numItemsInCart
  })
  const ariaLabel = numItemsInCart === 0 ? 'shopping cart is empty' : `shopping cart with ${numItemsInCart} items`

  return (
    <Link href="/shop/cart" className={CartLinkStyles} data-count={numItemsInCart} aria-label={ariaLabel}>
      {!numItemsInCart ?
        <RiShoppingBasket2Line size={36} /> :
        <RiShoppingBasket2Fill size={36} />
      }
    </Link>
  )
}

export default CartPageLink
