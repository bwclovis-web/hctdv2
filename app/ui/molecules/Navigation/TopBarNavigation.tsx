import CartPageLink from '../CartPageLink/CartPageLink'
import styles from './navigation.module.scss'

const TopBarNavigation = () => (
  <div className={styles.topNav}>
    <ul>
      <span>oh hai</span>
      <CartPageLink />
    </ul>
  </div>
)

export default TopBarNavigation
