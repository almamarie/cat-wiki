import { BreedType, ExpectedBreedData } from "@/utils/types";
import Image from "next/image";
import DescriptionScale from "./DescriptionScale";
import styles from "./TopPart.module.css";

const TopPart: React.FC<{ breed: BreedType }> = (props) => {
  const details = {
    adaptability: props.breed.adaptability,
    affection_level: props.breed.affection_level,
    child_friendly: props.breed.child_friendly,
    grooming: props.breed.grooming,
    health_issues: props.breed.health_issues,
    intelligence: props.breed.intelligence,
    social_needs: props.breed.social_needs,
    stranger_friendly: props.breed.stranger_friendly,
  };
  const breed = props.breed;
  console.log(breed);
  console.log(
    ` here oooooo o https://cdn2.thecatapi.com/images/${props.breed.reference_image_id}.jpg`
  );
  return (
    <section className={styles["top-half"]}>
      <div className={styles["breed-image"]}>
        <Image
          src={`https://cdn2.thecatapi.com/images/${props.breed.reference_image_id}.jpg`}
          alt={breed.name}
          className={styles.image}
          width={37.104}
          height={37.104}
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
          <span className={styles.text}>{breed.life_span}</span>
        </p>
        <ul className={styles["scales"]}>
          {Object.entries(details).map((entry, index) => {
            return (
              <DescriptionScale key={index} title={entry[0]} scale={entry[1]} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TopPart;
