import { BreedType, ExpectedBreedData } from "@/utils/types";
// import styles from "./BreedMain.module.css";
import ButtomPart from "./ButtomPart";
import TopPart from "./TopPart";

const BreedMain: React.FC<{ breed: BreedType; moreImages: string[] }> = (
  props
) => {
  const breed = props.breed;
  return (
    <main>
      <TopPart breed={breed} />
      <ButtomPart name={breed.name} moreImages={props.moreImages} />
    </main>
  );
};

export default BreedMain;
