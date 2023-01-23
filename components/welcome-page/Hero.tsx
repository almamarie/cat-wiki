import Logo from "../logo/Logo";
import BreedImage from "./BreedImage";
import styles from "./Hero.module.css";
import heroImage from "../../public/project-files/HeroImagelg.png";
import Image from "next/image";

// images
import IMAGE_1 from "../../public/project-files/image 1.png";
import IMAGE_2 from "../../public/project-files/image 2.png";
import IMAGE_3 from "../../public/project-files/image 3.png";

const DUMMY_BREEDS = [
  { name: "Bengal", image: IMAGE_1 },
  { name: "Savannah", image: IMAGE_2 },
  { name: "Norwegian Forest Cat", image: IMAGE_3 },
  { name: "Selkirk Rex", image: IMAGE_1 },
];

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
        <Image alt="hero" src={heroImage} className={styles["top-image"]} />
        <Logo type="big" fill="#fff" />
        <p>Get to know more about your cat breed</p>
        <input type="search" placeholder="Enter your breed" />
      </div>

      <div className={styles.buttom}>
        <h4>Most Searched Breeds</h4>
        <div className={styles.divider}></div>
        <p className={styles.description}>66+ Breeds for you to discover</p>
        <p className={styles.more}>SEE MORE &rarr;</p>
        <ul className={styles.breeds}>
          {DUMMY_BREEDS.map((breed, index) => {
            return <BreedImage key={index} data={breed} type="small" />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
