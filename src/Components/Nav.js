import DropDownArrow from "./DropDownArrow";
import styles from "../styles/nav.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  //initialize state for parents item in nav
  const [isParentClicked, setIsParentClicked] = useState(false);
  //initialize state for students item in nav
  const [isStudentClicked, setIsStudentClicked] = useState(false);

  const toggleParentDropDown = () => {
    // show drop down, when its click away take dropdown away
    setIsParentClicked(!isParentClicked);
  };

  const toggleStudentDropDown = () => {
    // show drop down, when its click away take dropdown away
    setIsStudentClicked(!isStudentClicked);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navigationBar}>
        <ul className={styles.navigationItems}>
          <li className={styles.logo}>
            <Link to="/">
              <h1>NumberNinjas.</h1>
            </Link>
          </li>

          <div className={styles.navItems}>
            <li
              className={styles.parentItemContainer}
              onClick={toggleParentDropDown}
            >
              <div className={styles.parentsItem}>
                Parents
                <div>
                  <DropDownArrow />
                </div>
              </div>
              {isParentClicked && (
                <ul className={styles.dropDownMenuParent}>
                  <li>
                    <Link to="/gameInstructions">How It Works</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={styles.studentItemContainer}
              onClick={toggleStudentDropDown}
            >
              <div className={styles.studentsItem}>
                Students
                <div>
                  <DropDownArrow />
                </div>
              </div>
              {isStudentClicked && (
                <ul className={styles.dropDownMenuStudent}>
                  <li>
                    <Link to="/startGame">Addition</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/startGame">Subtraction</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/startGame">Multiplication</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.practiceItem}>
              <Link to="/practice">Practice</Link>
            </li>
          </div>
        </ul>
        <div className={styles.getStartedButton}>
          <button>
            <Link to="/startGame">Get Started</Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
