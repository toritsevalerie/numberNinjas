import styles from "../styles/welcome.module.scss";
import ninjaOne from "../assets/sarahNinja.png";
import ninjaTwo from "../assets/ashleyNinja.png";

const Welcome = ({ startButtonClick }) => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.ninjaContainer}>
        <div className={styles.ninjaCharacterContainer}>
          <img
            className={styles.ninjas}
            src={ninjaOne}
            alt="illustrartion of a ninja kicking pose"
          />
        </div>

        <div className={styles.infoContainer}>
          <h1>Number Ninjas</h1>
          <h2>Have Fun & Learn Math!</h2>
          <p>
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
            className={styles.ninjas}
            src={ninjaTwo}
            alt="illustration of a ninja standing"
          />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
