import { useEffect } from "react";
import style from "./Login.module.scss";
import GoogleIcon from "/images/icons/Icon-Google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.form_container}>
          <div className={style.form_title}>
            <h1>Login to your account</h1>
            <p>Enter your details below</p>
          </div>
          <form className={style.form} action="">
            <div className={style.form_input_container}>
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
            </div>
            <div className={style.btn_container}>
              <div className={style.btn_group}>
                <button type="submit" className={style.signup_btn}>
                  Login
                </button>
                <button type="submit" className={style.forgot_btn}>
                  Forgot Password?
                </button>
              </div>
              <button className={style.google_btn}>
                <img src={GoogleIcon} alt="" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
