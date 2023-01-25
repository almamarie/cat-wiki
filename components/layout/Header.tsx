import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/project-files/CatwikiLogo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo of catwiki" className={styles.logo} />;
    </Link>
  );
};

export default Header;
