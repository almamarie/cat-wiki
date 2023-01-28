import Image, { StaticImageData } from "next/image";
import styles from "./ButtomPart.module.css";

const ButtomPart: React.FC<{ moreImages: string[]; name: string }> = (
  props
) => {
  // console.log(`more images 🥰 ${props.moreImages}`);
  return (
    <section>
      <h3 className={styles.title}>Other Photos</h3>
      <ul className={styles["images-wrapper"]}>
        {props.moreImages.map((image, index) => {
          return (
            <li key={index}>
              <Image
                alt={`${props.name} breed`}
                src={image}
                className={styles.image}
                width={270}
                height={270}
                priority
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ButtomPart;
