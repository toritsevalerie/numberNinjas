import DropDownButtonImage from "../assets/dropDownButton.png";

import styles from "../styles/reusableComponents.module.scss"

const DropDownButton = () => {
  return <img className={styles.dropDownButton} src={DropDownButtonImage} alt="drop down button" />;
};

export default DropDownButton;
