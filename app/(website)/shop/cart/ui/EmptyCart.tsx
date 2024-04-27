import Link from 'next/link'
import styles from './cartPagePartials.module.scss'
import CategoryList from '@/app/ui/molecules/CategoryList/CategoryList'

const EmptyCart = () => (
  <section className={`main-container ${styles.emptyCart}`}>
    <h1>Nothing in cart</h1>
    <p>It appears your cart is currently empty</p>
    <Link href="/shop" className="flip-link">Go to shop page</Link>
  </section>
)

export default EmptyCart
