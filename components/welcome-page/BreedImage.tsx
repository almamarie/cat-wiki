/* eslint-disable @next/next/no-img-element */
import { SearchHistoryType } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: SearchHistoryType;
  type: "small" | "large";
}> = (props) => {
  console.log("I was called");
  const imageWrapperClasses = `${styles["image"]} ${
    props.type === "small" ? styles.small : styles.large
  }`;
  return (
    <li className={styles.wrapper}>
      <img
        alt={props.data.name}
        src={props.data.imageUrl}
        className={imageWrapperClasses}
      />
      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
