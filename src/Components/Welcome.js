import styles from "../styles/welcome.module.scss";
import ninjaOne from "../assets/sarahNinja.png";
import ninjaTwo from "../assets/ashleyNinja.png";
import ninjaXlogo from "../assets/numberNinjasX.svg";
import additionIcon from "../assets/additionSign.svg";
import minusIcon from "../assets/minusSign.svg";

const Welcome = ({ startButtonClick }) => {
  return (
    <div className={styles.welcomeContainer}>
      <img src={minusIcon} className={styles.minusIcon} alt="minus logo" />
      <div className={styles.titleContainer}>
        <p className={styles.number}>Number</p>
        <img
          src={additionIcon}
          className={styles.additionIcon}
          alt="addition logo"
        />
        <p className={styles.ninjas}>Ninjas</p>
      </div>
      <img src={ninjaXlogo} className={styles.logoIcon} alt="X logo" />
      <img
        src={additionIcon}
        className={styles.additionIcon}
        alt="addition logo"
      />
      <div className={styles.ninjaContainer}>
        <div className={styles.ninjaCharacterContainer}>
          <img
            src={additionIcon}
            className={styles.additionIcon}
            alt="addition logo"
          />
          <img
            className={styles.ninjaOne}
            src={ninjaOne}
            alt="illustrartion of a ninja kicking pose"
          />
        </div>
        <img src={minusIcon} className={styles.minusIcon} alt="minus logo" />
        <img
          src={additionIcon}
          className={styles.additionIcon}
          alt="addition logo"
        />
        <div className={styles.infoContainer}>
          <h2>Have Fun & Learn Math!</h2>
          <hr className={styles.coloredLine} />
          <p className={styles.infoBlurb}>
            Dive into the exciting world of Number Ninjas! Embark on thrilling
            mathematical missions, sharpen your skills, and conquer challenges
            designed especially for young minds! In this enchanting realm, every
            sum solved and every number mastered makes you a stronger ninja,
            ready to tackle bigger adventures. Let the mathematical journey
            begin!
          </p>
          <button className={styles.startGameButton} onClick={startButtonClick}>
            Start Game
          </button>
        </div>
        <div className={styles.ninjaCharacterContainer}>
          <img
            className={styles.ninjaTwo}
            src={ninjaTwo}
            alt="illustration of a ninja standing"
          />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
