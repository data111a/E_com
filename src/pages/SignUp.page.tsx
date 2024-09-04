import { useEffect } from "react";
import style from "./SignUp.module.scss";
import GoogleIcon from "/images/icons/Icon-Google.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.form_container}>
          <div className={style.form_title}>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          <form className={style.form} action="">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Example@Email.com"
              name="email"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              required
            />
            <div className={style.btn_container}>
              <button type="submit" className={style.signup_btn}>
                Sign Up
              </button>
              <button className={style.google_btn}>
                <img src={GoogleIcon} alt="" />
                Sign Up with Google
              </button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
