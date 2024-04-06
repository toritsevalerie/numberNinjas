import styles from "../styles/landingPage.module.scss";
import headerImage from "../assets/numberNinjasHeaderImage.svg";
import DropDownButton from "./DropDownButton";
import additionIcon from "../assets/addition.svg";
import subtractionIcon from "../assets/subtraction.svg";
import multiplicationIcon from "../assets/multiplication.svg";
import practiceImage from "../assets/practiceImage.svg";
import { useState } from "react";

const LandingPage = ({ onSelectedAdittionMode }) => {
  const [isAdditionMenuClicked, setIsAdditionMenuClicked] = useState(false);

  const [isSubtractionMenuClicked, setIsSubtractionMenuClicked] =
    useState(false);

  const [isMultiplicationMenuClicked, setIsMultiplicationMenuClicked] =
    useState(false);

  const toggleAdditionMenu = () => {
    setIsAdditionMenuClicked(!isAdditionMenuClicked);
  };
  const toggleSubtractionMenu = () => {
    setIsSubtractionMenuClicked(!isSubtractionMenuClicked);
  };
  const toggleMultiplicationMenu = () => {
    setIsMultiplicationMenuClicked(!isMultiplicationMenuClicked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Level up your child’s math knowledge </h2>
        <p>
          Connects in class learning to at-home math practice. Make us your go
          to platform for effective virtual learning.
        </p>
        <img
          src={headerImage}
          alt="illustartion of a child playing with math toys"
        />
      </div>

      <div className={styles.infoSection}>
        <h2>Making Math Fun and Learning Easy!</h2>
        <p>
          Seamlessly Integrating In-Class Learning with Engaging At-Home Math
          Practice: Choose Us as Your Ultimate Virtual Learning Partner for
          Effective Educational Success!
        </p>
      </div>
      <div className={styles.gameContainer}>
        <p>
          Welcome to our learning platform, where the fun of learning begins!
          Here, you can choose your preferred math operation and find the
          perfect level to practice. Let's get started!
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
            <DropDownButton onClick={toggleAdditionMenu} />
            {isAdditionMenuClicked && (
              <ul className={styles.dropDownMenu}>
                <li onClick={() => onSelectedAdittionMode("easy")}>
                  Easy Mode
                </li>
                <li>Moderate Mode</li>
                <li>Hard Mode</li>
              </ul>
            )}
          </div>
          <div className={styles.subtraction}>
            <img
              className={styles.icons}
              src={subtractionIcon}
              alt="subtraction icon"
            />
            <h3>Subtraction</h3>
            <p>Test your subtraction skills with some fun equations!</p>
            <DropDownButton onClick={toggleSubtractionMenu} />
            {isSubtractionMenuClicked && (
              <ul className={styles.dropDownMenu}>
                <li>Easy Mode</li>
                <li>Moderate Mode</li>
                <li>Hard Mode</li>
              </ul>
            )}
          </div>
          <div className={styles.multiplication}>
            <img
              className={styles.icons}
              src={multiplicationIcon}
              alt="multiplication icon"
            />
            <h3>Multiplication</h3>
            <p>Test your multiplication skills with some fun equations! </p>
            <DropDownButton onClick={toggleMultiplicationMenu} />
          </div>
        </div>
      </div>
      <div className={styles.practiceContainer}>
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
    </div>
  );
};

export default LandingPage;
