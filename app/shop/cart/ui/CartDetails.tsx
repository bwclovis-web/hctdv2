"use client"

import { useState, useRef, useEffect, MouseEvent } from 'react'
import { formatPrice } from '@/lib/utils/formatPrice'
import styles from './cartPagePartials.module.scss'
import clsx from 'clsx'
import { CartDetailProps } from './CartDetailTypes'
import Link from 'next/link'

const CartDetails = ({ data }: CartDetailProps) => {
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checked && error) {
      setError('')
    }
  }, [checked, error])

  const handleCheckout = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    if (!checked) {
      evt.preventDefault()
      inputRef?.current?.focus()
      setError('Please agree by checking above.')
    }
  }

  const CheckoutLinkClasses = clsx({
    [styles.checkoutDisabled]: !checked,
    [styles.checkoutEnabled]: checked
  })

  return (
    <>
      <h2>Cart Subtotal</h2>
      <p>Sub Total: {formatPrice(data.subtotalPriceV2.amount, data.subtotalPriceV2.currencyCode)}</p>
      <p>By checking this I agree to the terms and conditions of the sale. </p>
      <div className={styles.termsCheckbox}>
        <input type="checkbox" id="terms" checked={checked} onChange={() => setChecked(!checked)} ref={inputRef} tabIndex={0} />
        <label htmlFor="terms" ><span></span>I Agree</label>
      </div>
      <div className={styles.checkoutContainer}>
        {error && <p>{error}</p>}
        <a href={data.webUrl} onClick={evt => handleCheckout(evt)} className={`btn-green ${CheckoutLinkClasses}`} aria-disabled={!checked}>Go to checkout</a>
      </div>
      <Link href="/shop" className={styles.shoppingLink}>Continue shopping</Link>
    </>
  )
}
export default CartDetails
