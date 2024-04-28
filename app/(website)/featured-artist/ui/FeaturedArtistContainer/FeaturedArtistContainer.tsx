// import BlockContent from "@sanity/block-content-to-react"
import HeroComponent from "@/app/ui/molecules/Hero/Hero"
import styles from './featuredArtist.module.scss'
import { formatFirstName } from "@/lib/utils/generalUtils"
import FeaturedSubmission from "../FeaturedSubmissions/FeaturedSubmissions"
import SocialMediaBlock from "../SocialMedia/SocialMedia"

const FeaturedArtistContainer = ({ content }: any) => (
  <>
    <HeroComponent heroImage={content.pageHero} />
    <div className={`${styles.container} main-container`}>
      <section>
        <div className={styles.bioHolder}>
          <h2 className="highlight">About {content.pageTitle}</h2>
          {/* <div>
            <BlockContent blocks={content.bio} />
          </div> */}
          {
            content?.websiteLink?.title && content?.websiteLink?.url &&
            <div className={styles.linkWrap}>
              <p>View more of {formatFirstName(content.firstName)} work:</p>
              <a href={content.websiteLink.url} className="flip-link">{content.websiteLink.title}</a>
            </div>
          }
        </div>
        <div>
          {
            content?.socialMedia?.length &&
            <>
              <h3 className="highlight">{content.firstName} online</h3>
              <SocialMediaBlock socialMedia={content.socialMedia} />
            </>
          }
        </div>
      </section>
      <section>
        <FeaturedSubmission item={content.currentEntry} />
      </section>
    </div>
  </>
)
export default FeaturedArtistContainer
