import styles from './shopPageStyles.module.scss'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.shopPage}>{children}</div>
  )
}
