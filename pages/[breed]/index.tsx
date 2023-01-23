import BreedMain from "@/components/breed/BreedMain";
import { ExpectedBreedData } from "@/utils/types";
import Head from "next/head";
import image_1 from "../../public/project-files/image 1.png";
import image_2 from "../../public/project-files/image 2.png";
import image_3 from "../../public/project-files/image 3.png";

const DUMMY_DATA: ExpectedBreedData = {
  image: image_1,
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
  moreImages: [image_1, image_2, image_3, image_1, image_2, image_3],
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
