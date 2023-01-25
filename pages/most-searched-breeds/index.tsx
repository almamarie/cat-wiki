import { SearchHistoryType } from "@/utils/types";
import styles from "./index.module.css";
import Image from "next/image";
import { NextPage } from "next";

type ExpectedDataType = {
  mostSearched: SearchHistoryType[];
};

const Handler: NextPage<ExpectedDataType> = (props) => {
  return (
    <main>
      <h2 className={styles.heading}>Top 10 Most Searched Breeds</h2>
      <ul className={styles.ul}>
        {props.mostSearched.map((data, index) => {
          return (
            <li key={index} className={styles.li}>
              <Image
                src={data.imageUrl}
                alt={data.name}
                className={styles.image}
                width={170}
                height={170}
                priority
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
};

export const getStaticProps = async () => {
  // fetch most searched breeds from database
  try {
    const response = await fetch(
      "https://cat-wiki-a00ec-default-rtdb.firebaseio.com/search-history.json"
    );

    if (response.status != 200) {
      throw new Error("an error occured");
    }
    const data: SearchHistoryType[] = await response.json();

    data.sort((currentHistory, nextHistory) => {
      return nextHistory.frequency - currentHistory.frequency;
    });

    return {
      props: {
        mostSearched: data.slice(0, 10),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        mostSearched: [],
      },
    };
  }
};

export default Handler;
