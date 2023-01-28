import { GET_AJAX } from "@/ajax/GET_AJAX";
import BreedMain from "@/components/breed/BreedMain";
import { getBreedsFromFirebase } from "@/utils/get-data-from-firebase";
import { BreedType, ExpectedBreedData, SearchHistoryType } from "@/utils/types";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment, useState } from "react";

type ExpectedDataType = {
  breed: BreedType[];
  error: boolean;
  moreImages: string[];
};

const Handler: NextPage<ExpectedDataType> = (props) => {
  const [error, setError] = useState(props.error);
  const breedData = props.breed[0];
  let description: string = "";
  let name: string = "";
  try {
    name = breedData.name;
    description = breedData.description;
  } catch (error) {
    setError(true);
    name = "";
    description = "";
    console.log(`The error occured here: ${breedData}`);
  }

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fragment>
        {error ? (
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
    try {
      // get breed from cat api
      let catApiResponse = await GET_AJAX(
        `/images/search?breed_ids=${breed.id}`
      );
      breedData = [catApiResponse.message[0].breeds[0]];

      // get more images from the cat API:
      let moreImagesResponse = await GET_AJAX(
        `/images/search?limit=10&breed_ids=${breed.id}`
      );

      moreImages = moreImagesResponse.message.map((data: { url: string }) => {
        return data.url;
      });
    } catch (error) {
      error = true;
    }
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

// /[breed]: /tang
// /[breed]: /tvan
// /[breed]: /ycho
