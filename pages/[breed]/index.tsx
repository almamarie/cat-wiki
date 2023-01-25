import { GET_AJAX } from "@/ajax/GET_AJAX";
import BreedMain from "@/components/breed/BreedMain";
import { getBreedsFromFirebase } from "@/utils/get-data-from-firebase";
import {
  BreedQueryType,
  BreedType,
  ExpectedBreedData,
  SearchHistoryType,
} from "@/utils/types";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
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

type ExpectedDataType = {
  breed: BreedType[];
  error: boolean;
  moreImages: string[];
};

const Handler: NextPage<ExpectedDataType> = (props) => {
  const breedData = props.breed[0];
  return (
    <>
      <Head>
        <title>{breedData.name}</title>
        <meta name="description" content={DUMMY_DATA.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fragment>
        {props.error ? (
          <p>
            An error occured.
            <br /> Please try again
          </p>
        ) : (
          <BreedMain moreImages={props.moreImages} breed={breedData} />
        )}
      </Fragment>
    </>
  );
};

export const getStaticPaths = async () => {
  // get all the breeds from the firbase database
  let paths = {};
  let data: SearchHistoryType[] = [];
  try {
    const response = await getBreedsFromFirebase();
    data = response.success === true ? response.message : [];
  } catch (error) {
    console.log(error);
  }

  paths = data.map((breed) => {
    return {
      params: {
        breed: breed.id,
      },
    };
  });
  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async (context: any) => {
  let error = false;
  // let breedData: BreedQueryType[] = [];
  let breedData: BreedType[] = [];
  // let breedData;
  const breedId = context.params.breed;

  let moreImages: string[] = [];

  const response = await getBreedsFromFirebase();
  const data: SearchHistoryType[] = response.message;

  const breed = data.find((entry) => {
    return entry.id === breedId;
  });

  if (!breed) {
    error = true;
  }

  if (breed) {
    // get breed from cat api
    let catApiResponse = await GET_AJAX(`/images/search?breed_ids=${breed.id}`);
    breedData = [catApiResponse.message[0].breeds[0]];

    // get more images from the cat API:
    let moreImagesResponse = await GET_AJAX(
      `/images/search?limit=10&breed_ids=${breed.id}`
    );

    moreImages = moreImagesResponse.message.map((data: { url: string }) => {
      return data.url;
    });
  }

  return {
    props: {
      breed: breedData,
      error,
      moreImages,
    },
  };
};

export default Handler;
