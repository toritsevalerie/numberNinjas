import styles from "../styles/playerMode.module.scss";
import ninjaXlogo from "../assets/numberNinjasX.svg";
import backButton from "../assets/backButton.png";

const PlayerMode = ({ playerModeClick }) => {
  return (
    <div className={styles.background}>
      <div className={styles.logo}>
        <img
          src={ninjaXlogo}
          className={styles.logoIcon}
          alt="number ninjas game logo"
        />
      </div>
      <div className={styles.playerModeOptionsContainer}>
        <div className={styles.playerModeOptions}>
          <button
            onClick={() => {
              playerModeClick("easy");
            }}
          >
            EASY{" "}
          </button>
          <button
            onClick={() => {
              playerModeClick("moderate");
            }}
          >
            MEDIUM
          </button>
          <button
            onClick={() => {
              playerModeClick("hard");
            }}
          >
            HARD
          </button>
        </div>
      </div>
      <div className={styles.backButtonContainer}>
        <img src={backButton} className={styles.backButton} alt="back button" />
      </div>
    </div>
  );
};

export default PlayerMode;
