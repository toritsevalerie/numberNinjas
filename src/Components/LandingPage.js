import styles from "../styles/landingPage.module.scss";
import headerImage from "../assets/numberNinjasHeaderImage.svg"

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Level up your child’s math knowledge </h2>
        <p>
          Connects in class learning to at-home math practice. Make us your go
          to platform for effective virtual learning.
        </p>
        <img src={headerImage} alt="illustartion of a child playing with math toys" />
      </div>
      <div className={styles.infoSection}>
        <h2>Making Math Fun and Learning Easy!</h2>
        <p>
          Seamlessly Integrating In-Class Learning with Engaging At-Home Math
          Practice: Choose Us as Your Ultimate Virtual Learning Partner for
          Effective Educational Success!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
