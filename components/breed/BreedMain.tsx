import { ExpectedBreedData } from "@/utils/types";
import styles from "./BreedMain.module.css";
import ButtomPart from "./ButtomPart";
import TopPart from "./TopPart";

const BreedMain: React.FC<{ breed: ExpectedBreedData }> = (props) => {
  const breed = props.breed;
  return (
    <main className={styles.wrapper}>
      <TopPart breed={breed} />
      <ButtomPart moreImages={breed.moreImages}/>
    </main>
  );
};

export default BreedMain;
