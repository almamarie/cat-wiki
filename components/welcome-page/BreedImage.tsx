/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{ data: { url: string; name: string } }> = (
  props
) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles["image-wrapper"]}>
        <img
          alt={props.data.name}
          src="/public/project-files/image 1.png"
          className={styles.image}
        />
      </div>
      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
