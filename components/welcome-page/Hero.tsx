import Logo from "../logo/Logo";
import BreedImage from "./BreedImage";
import styles from "./Hero.module.css";
import heroImage from "../../public/project-files/HeroImagelg.png";
import Image from "next/image";
import { SearchHistoryType } from "@/utils/types";
import Link from "next/link";

const Hero: React.FC<{ mostSearched: SearchHistoryType[] }> = (props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <Image
          alt="hero"
          src={heroImage}
          className={styles["top-image"]}
          priority
        />
        <Logo type="big" fill="#fff" />
        <p>Get to know more about your cat breed</p>
        <input type="search" placeholder="Enter your breed" />
      </div>

      <div className={styles.buttom}>
        <h4>Most Searched Breeds</h4>
        <div className={styles.divider}></div>
        <p className={styles.description}>66+ Breeds for you to discover</p>
        <Link href="/most-searched-breeds" className={styles.more}>
          SEE MORE &rarr;
        </Link>
        <ul className={styles.breeds}>
          {props.mostSearched.map((breed, index) => {
            return <BreedImage key={index} data={breed} type="small" />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
