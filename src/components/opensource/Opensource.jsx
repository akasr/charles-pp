import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Opensource.scss";
import { faCode, faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Opensource = () => {
  

  useEffect(() => {

    // Remove active classes from all cards and buttons
    const removeActiveClasses = () => {
      document.querySelectorAll("article").forEach((card) => {
        card.classList.remove("current");
      });

      const buttons = document.querySelectorAll(".card-btn");
      buttons.forEach((btn) => {
        btn.classList.remove("current-card-btn");
      });
    };

    // Swap card by button click
    const swapCardByBtn = (button, index) => {
      removeActiveClasses();

      document.getElementById(`card${index + 1}`).classList.add("current");
      button.classList.add("current-card-btn");
    };

    // Swap card every 4 seconds
    const swapCardByTime = () => {
      const currentCard = document.querySelector(".current");
      const currentButton = document.querySelector(".current-card-btn");

      removeActiveClasses();

      if (
        currentCard.nextElementSibling &&
        currentCard.nextElementSibling.tagName === "ARTICLE"
      ) {
        currentCard.nextElementSibling.classList.add("current");
        currentButton.nextElementSibling.classList.add("current-card-btn");
      } else {
        document.getElementById("card1").classList.add("current");
        document.getElementById("card-btn1").classList.add("current-card-btn");
      }
    };

    const buttons = document.querySelectorAll(".card-btn");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        swapCardByBtn(button, index);
      });
    });

    const intervalId = setInterval(swapCardByTime, 4000);

    return () => clearInterval(intervalId);
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
        <div className="card-btn" id="card-btn1"></div>
        <div className="card-btn current-card-btn" id="card-btn2"></div>
        <div className="card-btn" id="card-btn3"></div>
      </div>
    </section>
  );
};

export default Opensource;
