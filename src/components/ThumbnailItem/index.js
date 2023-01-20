// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {ThumbNailDetails, gettingParticularImage, isActive} = props
  const {thumbnailAltText, thumbnailUrl, id} = ThumbNailDetails

  const activeThumbnailClassName = isActive ? 'active-list-item' : ' '

  const onClickImage = () => {
    gettingParticularImage(id)
  }

  return (
    <li className={`list-item ${activeThumbnailClassName}`}>
      <button className="button" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          className="image-style"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
