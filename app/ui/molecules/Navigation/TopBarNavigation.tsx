import CartPageLink from '../CartPageLink/CartPageLink'
import { BsFacebook } from "react-icons/bs"
import { TiSocialInstagram } from "react-icons/ti"
import styles from './navigation.module.scss'

const TopBarNavigation = () => (
  <nav className={styles.topNav} title="top-nav">
    <ul>
      <li>
        <a href="https://www.facebook.com/groups/1259074817923302" target="_blank" aria-label="happy cat tie dye facebook group">
          <BsFacebook size={30} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/happy_cat_tie_dye/" target="_blank" aria-label="happy cat tie dye on instagram">
          <TiSocialInstagram size={38} />
        </a>
      </li>
    </ul>
    <CartPageLink />
  </nav>
)

export default TopBarNavigation
