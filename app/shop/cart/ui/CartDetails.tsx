import { formatPrice } from '@/lib/utils/formatPrice'
import styles from '../cartPage.module.scss'

const CartDetails = ({ data }) => {
  if (!data.subtotalPriceV2) {
    return <p>OHHAI</p>
  }
  return (
    <>
      <h2>Cart Subtotal</h2>
      <p>Sub Total: {formatPrice(data.subtotalPriceV2.amount, data.subtotalPriceV2.currencyCode)}</p>
      <p>By checking this I agree to the terms and conditions of the sale. </p>
      <div className={styles.termsCheckbox}>
        <input type="checkbox" id="terms" />
        <label htmlFor="terms"><span></span>I Agree</label>
      </div>
    </>
  )
}
export default CartDetails
