import styles from "../styles/playerMode.module.scss";
import BackArrow from "./BackArrow";

const PlayerMode = ({ playerModeClick }) => {
  return (
    <div className={styles.background}>
      <div className={styles.playerModeOptionsContainer}>
        <div className={styles.backButtonContainer}>
          <BackArrow />
        </div>
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
    </div>
  );
};

export default PlayerMode;
