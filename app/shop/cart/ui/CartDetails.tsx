"use client"

import { useState, useRef, useEffect } from 'react'
import { formatPrice } from '@/lib/utils/formatPrice'
import styles from '../cartPage.module.scss'


const CartDetails = ({ data }) => {
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checked && error) {
      setError('')
    }
  }, [checked, error])

  if (!data.subtotalPriceV2) {
    return <p>OHHAI</p>
  }

  const handleCheckout = evt => {
    if (!checked) {
      evt.preventDefault()
      inputRef?.current?.focus()
      setError('Please agree by checking above.')
    }
    // evt.preventDefault()
  }

  const handleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <>
      <h2>Cart Subtotal</h2>
      <p>Sub Total: {formatPrice(data.subtotalPriceV2.amount, data.subtotalPriceV2.currencyCode)}</p>
      <p>By checking this I agree to the terms and conditions of the sale. </p>
      <div className={styles.termsCheckbox}>
        <input type="checkbox" id="terms" checked={checked} onChange={() => handleCheckbox()} ref={inputRef} tabIndex={0} />
        <label htmlFor="terms" ><span></span>I Agree</label>
      </div>
      <div className={styles.checkoutContainer}>
        {error && <p>{error}</p>}
        <a href={data.webUrl} onClick={evt => handleCheckout(evt)}>Oh hai</a>
      </div>
    </>
  )
}
export default CartDetails
