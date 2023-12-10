import CartPageLink from '../CartPageLink/CartPageLink'
import { BsFacebook } from "react-icons/bs"
import { TiSocialInstagram } from "react-icons/ti"
import styles from './navigation.module.scss'

const TopBarNavigation = () => (
  <div className={styles.topNav}>
    <ul>
      <li>
        <a href="https://www.facebook.com/groups/1259074817923302" target="_blank">
          <BsFacebook size={30} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/happy_cat_tie_dye/" target="_blank">
          <TiSocialInstagram size={38} />
        </a>
      </li>
    </ul>
    <CartPageLink />
  </div>
)

export default TopBarNavigation
