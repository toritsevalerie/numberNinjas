import backArrow from "../assets/backArrow.png";
import styles from "../styles/reusableComponents.module.scss";
const BackArrow = () => {
  return (
    <div>
      <button>
        <img
          className={styles.backArrowImage}
          src={backArrow}
          alt="go back arrow"
        />
      </button>
    </div>
  );
};
export default BackArrow;
