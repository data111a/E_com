import style from "./Footer.module.scss";
import QRCode from "/images/icons/Qrcode.svg";
import AppleIcon from "/images/icons/download-appstore.svg";
import GoogleIcon from "/images/icons/androindDownload.svg";
import fb from "/images/icons/fb.svg";
import ig from "/images/icons/instagram.svg";
import tw from "/images/icons/twitter.svg";
import li from "/images/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div>
        <h1>Exclusive</h1>
        <h5>Subscribe</h5>
        <p>Get 10% off your first order</p>
      </div>
      <div>
        <h1>Support</h1>
        <h5>Aleksandre Kvachadze N1</h5>
        <p>example@gmail.com</p>
        <p>+995 599 123 45 67</p>
      </div>
      <div>
        <h1>Account</h1>
        <p>My account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div>
        <h1>Quick Link</h1>
        <p>Contact us</p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
      </div>
      <div>
        <h1>Download App</h1>
        <div className={style.download_container}>
          <img src={QRCode} alt="apple" />
          <div>
            <img src={GoogleIcon} alt="google" />
            <img src={AppleIcon} alt="google" />
          </div>
        </div>
        <div className={style.social_container}>
          <img src={fb} alt="facebook" />
          <img src={ig} alt="instagram" />
          <img src={tw} alt="twitter" />
          <img src={li} alt="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
