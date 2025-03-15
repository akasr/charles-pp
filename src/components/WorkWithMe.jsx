import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WorkWithMe = () => {
  return (
    <button
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "5px",
        border: "2px solid white",
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}
    >
      <FontAwesomeIcon icon={faArrowRight} /> Work with me
    </button>
  );
};

export default WorkWithMe;
