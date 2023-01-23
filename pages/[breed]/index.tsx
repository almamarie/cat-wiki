import BreedMain from "@/components/breed/BreedMain";
import Head from "next/head";
import styles from "./index.module.css";

const DUMMY_DATA = {
  name: "Bengal",
  description:
    "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
  Temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
  origin: "United states",
  "life span": "12 - 15yrs",
  details: {
    adaptability: 5,
    "affection level": 5,
    "child-friendly": 4,
    grooming: 1,
    intelligence: 5,
    "health issues": 3,
    "social needs": 3,
    "stranger friendly": 3,
  },
};

const Handler = () => {
  return (
    <>
      <Head>
        <title>{DUMMY_DATA.name}</title>
        <meta name="description" content={DUMMY_DATA.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BreedMain />
    </>
  );
};

// export const getStaticProps = (context) => {};

export default Handler;
