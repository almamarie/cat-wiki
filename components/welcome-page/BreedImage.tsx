/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: { image: StaticImageData; name: string };
}> = (props) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles["image-wrapper"]}>
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
