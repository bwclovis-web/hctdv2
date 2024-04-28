import ArtistDisclaimerContent from './ArtistDisclaimer'
import styles from './NewArtist.module.scss'

const NewArtistForm = () => (
  <section className={styles.container}>
    <div className="main-container">
      <h2>Interested in being a featured artist?</h2>
      <details>
        <summary className={`${styles.trigger} btn btn-ghost`}>learn more</summary>
        <div>
          <ArtistDisclaimerContent />
        </div>
      </details>
    </div >
  </section>
)

export default NewArtistForm
