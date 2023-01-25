import { SearchHistoryType } from "@/utils/types";
import styles from "./index.module.css";
import Image from "next/image";

// to be removed
import IMAGE_1 from "../../public/project-files/image 1.png";
import IMAGE_2 from "../../public/project-files/image 2.png";
import IMAGE_3 from "../../public/project-files/image 3.png";

function Handler() {
  const DUMMY_DATA = [
    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_1,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_2,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_3,
    },
    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_1,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_2,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_3,
    },
    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_1,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_2,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_3,
    },

    {
      frequency: 0,
      id: "ycho",
      name: "Chocolate",
      description:
        "York Chocolate cats are known to be true lap cats with a sweet temperament. They love to be cuddled and petted. Their curious nature makes them follow you all the time and participate in almost everything you do, even if it's related to water: unlike many other cats, York Chocolates love it.",
      imageUrl: IMAGE_3,
    },
  ];
  return (
    <main>
      <h2 className={styles.heading}>Top 10 Most Searched Breeds</h2>
      <ul className={styles.ul}>
        {DUMMY_DATA.map((data, index) => {
          return (
            <li key={index} className={styles.li}>
              <Image
                src={data.imageUrl}
                alt={data.name}
                className={styles.image}
              />
              <div className={styles.description}>
                <h3>{`${index + 1}. ${data.name}`}</h3>
                <p className={styles.p}>{data.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Handler;
