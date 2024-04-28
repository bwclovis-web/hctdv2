"use client"

import Link from "next/link"
import { chicle } from "../../fonts"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import styles from './MainLogo.module.scss'

const MainLogo = () => {
  const router = usePathname()
  const LogoStyles = clsx({
    [styles.homeLink]: true,
    [styles.shopLink]: router === '/shop' || router.startsWith('/shop/category') || router.startsWith('/shop/tags')
  })

  return (
    <Link href="/" className={`${chicle.className} ${LogoStyles}`}>
      <span>Happy Cat</span>
      <span>Tie Dye</span>
    </Link>
  )
}

export default MainLogo
