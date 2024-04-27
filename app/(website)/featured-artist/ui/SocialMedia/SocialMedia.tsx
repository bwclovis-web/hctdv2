import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr'
import { FaTiktok, FaFacebook } from 'react-icons/fa'
import styles from './socialMedia.module.scss'
const SocialMediaBlock = ({ socialMedia }: any) => (
  <ul className={styles.mediaList}>
    {
      socialMedia.map((item: { type: any[]; url: string | undefined }) => {
        const type = item.type[0]

        return (
          type === "facebook" && <li key-={type}><a href={item.url} className={styles.mediaLink}><FaFacebook size={30} /><span>facebook</span></a></li> ||
          type === "instagram" && <li key-={type}><a href={item.url} className={styles.mediaLink}><GrInstagram size={30} /><span>instagram</span></a></li> ||
          type === "twitter" && <li key-={type}><a href={item.url} className={styles.mediaLink}><GrTwitter size={30} /><span>x</span></a></li> ||
          type === "youtube" && <li key-={type}><a href={item.url} className={styles.mediaLink}><GrYoutube size={30} /><span>youtube</span></a></li> ||
          type === "tiktok" && <li key-={type}><a href={item.url} className={styles.mediaLink}><FaTiktok size={30} /><span>tiktok</span></a></li>
        )
      })
    }
  </ul>
)

export default SocialMediaBlock
