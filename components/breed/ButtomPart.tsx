import { StaticImageData } from "next/image";
import BreedImage from "../welcome-page/BreedImage";
import styles from "./ButtomPart.module.css";

const ButtomPart: React.FC<{ moreImages: StaticImageData[] }> = (props) => {
  return (
    <section>
      <h3 className={styles.title}>Other Photos</h3>
      <ul className={styles["images-wrapper"]}>
        {props.moreImages.map((image, index) => {
          const data = {
            name: "",
            image,
          };
          return <BreedImage key={index} type="large" data={data} />;
        })}
      </ul>
    </section>
  );
};

export default ButtomPart;
