import DropDownButton from "./DropDownButton";
import additionIcon from "../assets/addition.svg";
import subtractionIcon from "../assets/subtraction.svg";
import multiplicationIcon from "../assets/multiplication.svg";
import styles from "../styles/mathGame.module.scss";

const MathGame = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        Welcome to our learning platform, where the fun of learning begins!
        Here, you can choose your preferred math operation and find the perfect
        level to practice. Let's get started!
      </p>
      <div className={styles.gameCategories}>
        <div className={styles.addition}>
          <img
            className={styles.icons}
            src={additionIcon}
            alt="addition icon"
          />
          <h3>Addition</h3>
          <p>Test your addition skills with some fun equations! </p>
          <DropDownButton />
          <ul className={styles.dropDownMenu}>
            <li>Easy Mode</li>
            <li>Moderate Mode</li>
            <li>Hard Mode</li>
          </ul>
        </div>
        <div className={styles.subtraction}>
          <img
            className={styles.icons}
            src={subtractionIcon}
            alt="subtraction icon"
          />
          <h3>Subtraction</h3>
          <p>Test your subtraction skills with some fun equations!</p>
          <DropDownButton />
        </div>
        <div className={styles.multiplication}>
          <img
            className={styles.icons}
            src={multiplicationIcon}
            alt="multiplication icon"
          />
          <h3>Multiplication</h3>
          <p>Test your multiplication skills with some fun equations! </p>
          <DropDownButton />
        </div>
      </div>
    </div>
  );
};
export default MathGame;
