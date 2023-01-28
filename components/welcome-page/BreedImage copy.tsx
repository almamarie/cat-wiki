/* eslint-disable @next/next/no-img-element */
import { SearchHistoryType } from "@/utils/types";
import Image from "next/image";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: SearchHistoryType;
  type: "small" | "large";
}> = (props) => {
  const imageWrapperClasses = `${styles["image"]} ${
    props.type === "small" ? styles.small : styles.large
  }`;
  return (
    <li className={styles.wrapper}>
      {props.type === "small" ? (
        <Image
          alt={props.data.name}
          src={props.data.imageUrl}
          className={imageWrapperClasses}
          width={200}
          height={200}
        />
      ) : (
        <Image
          alt={props.data.name}
          src={props.data.imageUrl}
          className={imageWrapperClasses}
          width={270}
          height={270}
        />
      )}
      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
