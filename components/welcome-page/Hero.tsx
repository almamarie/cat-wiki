import Logo from "../logo/Logo";
import BreedImage from "./BreedImage";
import styles from "./Hero.module.css";

const DUMMY_BREEDS = [
  { name: "Bengal", url: "image 1.png" },
  { name: "Savannah", url: "image 2.png" },
  { name: "Norwegian Forest Cat", url: "image 3.png" },
  { name: "Selkirk Rex", url: "image 1.png" },
];

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.top}>
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
            return <BreedImage key={index} data={breed} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
