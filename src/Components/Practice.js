import styles from "../styles/practice.module.scss";
import practiceImage from "../assets/practiceImage.svg";

const Practice = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.practice}>
        <h3 className={styles.title}>
          Want to practice first before starting the lessons? Look no further{" "}
        </h3>
        <p className={styles.titleInfo}>
          Start by introducing your kids to the practice version; it's a great
          way for them to build essential skills before they tackle the more
          challenging games.
        </p>
        <img src={practiceImage} alt="math kid illustration" />
        <div className={styles.practiceButtonContainer}>
          <button>Start Practicing Now</button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
