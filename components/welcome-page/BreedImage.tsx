/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: { image: StaticImageData; name: string };
  type: "small" | "large";
}> = (props) => {
  const imageWrapperClasses = `${styles["image-wrapper"]} ${
    props.type === "small" ? styles.small : styles.large
  }`;
  return (
    <li className={styles.wrapper}>
      <div className={imageWrapperClasses}>
        <Image
          alt={props.data.name}
          src={props.data.image}
          className={styles.image}
        />
      </div>
      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
