import styles from "./Footer.module.css";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Logo type="small" fill="#fff" />
      <div className={styles.copywrite}>
        <p>
          © Created by{" "}
          <a href="www.linkedin.com/in/marieloumar" target="_blank">
            Louis Marie Atoluko Ayariga
          </a>{" "}
          devChallenge.io
        </p>
      </div>
    </div>
  );
};

export default Footer;
