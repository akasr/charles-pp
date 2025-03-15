import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReadBtn = () => {
  return (
    <button className="btn-read">
      <FontAwesomeIcon icon={faArrowRight} /> <span className="btn-text">READ ARTICLE</span>
    </button>
  );
}

export default ReadBtn;