import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";
import dotsIcon from "../assets/icons/dots.svg";
import "../styles/CoverImage.css";


export function CoverImage(props) {
  return (
    <div className="image-container">
    <img src={props.src} alt={props.alt} />
    <div className="icons-container">
      <img src={heartIcon} alt="heart-icon" className="icons"></img>
      <img src={playIcon} alt="play-icon" className="icons"></img>
      <img src={dotsIcon} alt="dots-icon" className="icons"></img>
    </div>
    </div>
  )
 
}
