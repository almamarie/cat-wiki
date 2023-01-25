/* eslint-disable @next/next/no-img-element */
import { SearchHistoryType } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: SearchHistoryType;
  type: "small" | "large";
}> = (props) => {
  console.log("I was called");
  const imageWrapperClasses = `${styles["image-wrapper"]} ${
    props.type === "small" ? styles.small : styles.large
  }`;
  return (
    <li className={styles.wrapper}>
      <div className={imageWrapperClasses}>
        <Image
          alt={props.data.name}
          src={props.data.imageUrl}
          className={imageWrapperClasses}
          layout="fill"
        />
      </div>
      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
