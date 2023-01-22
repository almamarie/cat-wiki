import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/project-files/CatwikiLogo.svg";

const Header = () => {
  return <Image src={logo} alt="logo of catwiki" className={styles.logo} />;
};

export default Header;
