/* eslint-disable @next/next/no-img-element */
import { SearchHistoryType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./BreedImage.module.css";

const BreedImage: React.FC<{
  data: SearchHistoryType;
}> = (props) => {
  return (
    <li className={styles.wrapper} onClick={() => {}}>
      <Link href={`/${props.data.id}`}>
        <Image
          alt={props.data.name}
          src={props.data.imageUrl}
          className={styles.image}
          width={200}
          height={200}
        />
      </Link>

      <p>{props.data.name}</p>
    </li>
  );
};

export default BreedImage;
