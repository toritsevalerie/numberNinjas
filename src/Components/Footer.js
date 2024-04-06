import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.home}>
        <li className={styles.heading}>NumberNinjas.</li>
        <li> @ Copyright 2023 - Toritse Valerie Tuedor </li>
      </ul>
      <div className={styles.groupedSectionFooter}>
        <ul className={styles.services}>
          <li className={styles.heading}>Services</li>
          <li>Addition</li>
          <li>Multipication</li>
          <li>Subtraction</li>
        </ul>
        <ul className={styles.instructions}>
          <li className={styles.heading}>Instructions</li>
          <li>How it Works</li>
          <li>Practice Work</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
