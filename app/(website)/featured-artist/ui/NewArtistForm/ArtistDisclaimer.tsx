import styles from './NewArtist.module.scss'

const ArtistDisclaimerContent = () => {
  const mailDataNew = {
    "href": "mailto:hctd.featured.artist@gmail.com?subject=New Artist"
  }
  const mailDataResubmit = {
    "href": "mailto:hctd.featured.artist@gmail.com?subject=New Entry"
  }
  return (
    <section className={styles.info}>
      <h2>Featured Artist Requirements</h2>
      <p>
        Please note, this is NOT a contest. Everyone who participates will be featured at some point, and hopefully several times.
        Right now, please only one submission per email.
      </p>
      <div className={styles.directionsWrap}>
        <div>
          <p>
            For artists applying for the first time, please provide the following *(if applicable).
          </p>
          <ul className="p-3">
            <li>First and last name</li>
            <li>*Short Bio</li>
            <li>*Link / name of website</li>
            <li>*Any social media links</li>
            <li>Quality image of art piece</li>
            <li>*Name of art piece</li>
            <li>Happy Cat dyes used</li>
          </ul>
        </div>
        <div>
          <p>
            For artists applying with a new entry,
          </p>
          <ul className="p-3">
            <li>Quality image of art piece</li>
            <li>*Name of art piece</li>
            <li>Happy Cat dyes used</li>
          </ul>
        </div>
      </div>
      <p>We are looking forward to seeing all the amazing things made with Happy Cat dyes!</p>
      <div className={styles.controls}>
        <a {...mailDataNew} className="btn btn-ghost">I'm a new artist</a>
        <a {...mailDataResubmit} className="btn btn-ghost">I have a new art piece</a>
      </div>
    </section>
  )
}

export default ArtistDisclaimerContent
