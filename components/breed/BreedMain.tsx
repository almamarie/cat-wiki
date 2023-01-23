import { ExpectedBreedData } from "@/utils/types";
import Image from "next/image";
import styles from "./BreedMain.module.css";
import DescriptionScale from "./DescriptionScale";

const BreedMain: React.FC<{ breed: ExpectedBreedData }> = (props) => {
  const breed = props.breed;
  return (
    <section className={styles.wrapper}>
      <div className={styles["top-half"]}>
        <div className={styles["breed-image"]}>
          <Image
            src={props.breed.image}
            alt={breed.name}
            className={styles.image}
          />
        </div>
        <div className={styles["breed-description"]}>
          <h3 className={styles.name}>{breed.name}</h3>
          <p className={styles.description}>{breed.description}</p>
          <p>
            <span className={styles.label}>Temperament</span>:{" "}
            <span className={styles.text}>{breed.temperament}</span>
          </p>
          <p>
            <span className={styles.label}>Origin</span>:{" "}
            <span className={styles.text}>{breed.origin}</span>
          </p>
          <p>
            <span className={styles.label}>Live Span</span>:{" "}
            <span className={styles.text}>{breed.lifeSpan}</span>
          </p>
          <ul className={styles["scales"]}>
            {Object.entries(breed.details).map((entry) => {
              return (
                <DescriptionScale
                  key={entry[0]}
                  title={entry[0]}
                  scale={entry[1]}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles["bottom-half"]}></div>
    </section>
  );
};

export default BreedMain;
