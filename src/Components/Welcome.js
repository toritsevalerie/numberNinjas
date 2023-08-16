const Welcome = ({startButtonClick}) => {
  return (
    <div className="welcomeContianer">
      <div className="welcomeText">
        <h1>Welcome to Number Ninjas!</h1>
        Dive into the exciting world of Number Ninjas! Embark on thrilling
        mathematical missions, sharpen your skills, and conquer challenges
        designed especially for young minds! In this enchanting realm, every sum
        solved and every number mastered makes you a stronger ninja, ready to
        tackle bigger adventures. Let the mathematical journey begin!
      </div>
      <div className="welcomeImage">
        <img src="https://place-puppy.com/300x300" alt="start button" onClick = {startButtonClick}/>
      </div>
    </div>
  );
};
export default Welcome;
