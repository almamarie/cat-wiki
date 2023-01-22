import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>{props.children}</main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
