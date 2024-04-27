import ImageButton from "@/app/ui/Atoms/ImageButton/ImageButton"
import styles from './PreviousArtists.module.scss'

const PreviousArtists = ({ previousFeatured }) => {
  console.log(`%c previousFeatured`, 'background: #0047ab; color: #fff; padding: 2px:', previousFeatured)
  return <section className="main-container">
    <h2 className="font-display text-h3-dynamic mb-10 text-slate-900 capitalize">view previous featured artists</h2>
    <ul className={styles.list}>
      {previousFeatured.map(item => (
        <li key={item.slug.current} className={styles.listItem}>
          <ImageButton linkData={item} />
        </li>
      ))}
    </ul>
  </section>
}

export default PreviousArtists
