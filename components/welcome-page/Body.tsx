import styles from "./Body.module.css";

// images
import IMAGE_1 from "../../public/project-files/image 1.png";
import IMAGE_2 from "../../public/project-files/image 2.png";
import IMAGE_3 from "../../public/project-files/image 3.png";
import Image from "next/image";

const Body = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <div className={styles.heading}>
          <div className={styles.divider}></div>
          <h2>Why should you have a cat?</h2>
        </div>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <div className={styles.more}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/search?q=cats&oq=cats&aqs=chrome..69i57.793j0j7&sourceid=chrome&ie=UTF-8"
          >
            READ MORE &rarr;
          </a>
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles["inner-images"]}>
          <Image src={IMAGE_2} alt="a cat" className={styles.image_1} />
          <Image src={IMAGE_1} alt="a cat" className={styles.image_2} />
        </div>
        <Image src={IMAGE_3} alt="a cat" className={styles.image_3} />
      </div>
    </section>
  );
};

export default Body;
