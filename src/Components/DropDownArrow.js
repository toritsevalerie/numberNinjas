import DropDownArrowImage from "../assets/dropDownArrow.svg";
import styles from "../styles/reusableComponents.module.scss"

const DropDownArrow = () => {
  return <img src={DropDownArrowImage} className = {styles.dropDownArrow}alt="drop down arrow" />;
};

export default DropDownArrow;
