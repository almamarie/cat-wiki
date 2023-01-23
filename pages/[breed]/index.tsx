import BreedMain from "@/components/breed/BreedMain";
import { ExpectedBreedData } from "@/utils/types";
import Head from "next/head";
import styles from "./index.module.css";
import image from "../../public/project-files/image 1.png";

const DUMMY_DATA: ExpectedBreedData = {
  image: image,
  name: "Bengal",
  description:
    "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
  temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
  origin: "United states",
  lifeSpan: "12 - 15yrs",
  details: {
    adaptability: 5,
    "affection level": 5,
    "child friendly": 4,
    grooming: 1,
    intelligence: 5,
    "health issues": 3,
    "social needs": 5,
    "stranger friendly": 3,
  },
  moreImages: [image, image, image],
};

const Handler = () => {
  return (
    <>
      <Head>
        <title>{DUMMY_DATA.name}</title>
        <meta name="description" content={DUMMY_DATA.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <BreedMain breed={DUMMY_DATA} />
    </>
  );
};

// export const getStaticProps = (context) => {};

export default Handler;
