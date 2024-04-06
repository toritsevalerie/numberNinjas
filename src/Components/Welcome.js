import styles from "../styles/welcome.module.scss";
import ninjaXlogo from "../assets/numberNinjasX.svg";

const Welcome = ({ startButtonClick }) => {
  return (
    <div
      className={styles.wrapper}
    >
      <div className={styles.homepage}>
        <div className={styles.navBar}>
          <div className={styles.navigationItems}>
            <p>Practice</p>
            <p>How It Works</p>
          </div>
          <div className={styles.logo}>
            <img
              src={ninjaXlogo}
              className={styles.logoIcon}
              alt="number ninjas game logo"
            />
          </div>
        </div>

        <div className={styles.infoContainer}>
          <h1>Have Fun & Learn Math!</h1>

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
      </div>
    </div>
  );
};
export default Welcome;
