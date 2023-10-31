import DropDownArrow from "./DropDownArrow";
import styles from "../styles/nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navigationBar}>
        <ul className={styles.navigationItems}>
          <li className={styles.logo}>
            <h1>NumberNinjas.</h1>
          </li>
          <div className={styles.navItems}>
            <li>
              <div className={styles.parentsItem}>
                Parents
                <div>
                  <DropDownArrow />
                </div>
              </div>
              <ul className={styles.dropDownMenu}>
                <li>How It Works</li>
              </ul>
            </li>
            <li>
              <div className={styles.studentsItem}>
                Students
                <div>
                  <DropDownArrow />
                </div>
              </div>
              <ul className={styles.dropDownMenu}>
                <li>Addition</li>
                <li>Subtraction</li>
                <li>Multiplication</li>
              </ul>
            </li>
            <li className={styles.practiceItem}>Practice</li>
          </div>
        </ul>
        <div className={styles.getStartedButton}>
          <button>Get Started</button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
