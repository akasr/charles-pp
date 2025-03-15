import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Opensource.scss";
import { faCode, faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Opensource = () => {
  useEffect(() => {
    // Add click event handlers after component mount
    const buttons = document.querySelectorAll(".card-btn");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Remove active classes from all cards and buttons
        document.querySelectorAll("article").forEach((card) => {
          card.classList.remove("current");
        });

        buttons.forEach((btn) => {
          btn.classList.remove("current-card-btn");
        });

        // Add active classes to selected card and button
        document.getElementById(`card${index + 1}`).classList.add("current");
        button.classList.add("current-card-btn");
      });
    });
  }, []);

  return (
    <section className="opensource">
      <h2>Opensource</h2>
      <article id="card1">
        <div>
          <FontAwesomeIcon className="code-icon" icon={faCode} />
        </div>
        <div>
          <h3>Swap 1</h3>
          <p>Currency exchange rates library for PHP.</p>
          <div className="stats">
            <p>
              <FontAwesomeIcon className="icon" icon={faStar} /> 645
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faCodeFork} /> 324
            </p>
          </div>
        </div>
      </article>
      <article className="current" id="card2">
        <div>
          <FontAwesomeIcon className="code-icon" icon={faCode} />
        </div>
        <div>
          <h3>Swap 2</h3>
          <p>Currency exchange rates library for PHP.</p>
          <div className="stats">
            <p>
              <FontAwesomeIcon className="icon" icon={faStar} /> 645
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faCodeFork} /> 324
            </p>
          </div>
        </div>
      </article>
      <article id="card3">
        <div>
          <FontAwesomeIcon className="code-icon" icon={faCode} />
        </div>
        <div>
          <h3>Swap 3</h3>
          <p>Currency exchange rates library for PHP.</p>
          <div className="stats">
            <p>
              <FontAwesomeIcon className="icon" icon={faStar} /> 645
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faCodeFork} /> 324
            </p>
          </div>
        </div>
      </article>

      <div className="btn-group">
        <div className="card-btn"></div>
        <div className="card-btn current-card-btn"></div>
        <div className="card-btn"></div>
      </div>
    </section>
  );
};

export default Opensource;
