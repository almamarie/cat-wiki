import { GET_AJAX } from "@/ajax/GET_AJAX";
import BreedMain from "@/components/breed/BreedMain";
import { getBreedsFromFirebase } from "@/utils/get-data-from-firebase";
import { BreedType, ExpectedBreedData, SearchHistoryType } from "@/utils/types";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";

type ExpectedDataType = {
  breed: BreedType[];
  error: boolean;
  moreImages: string[];
};

const Handler = () => {
  // const Handler: NextPage<ExpectedDataType> = (props) => {

  // const [error, setError] = useState(props.error);
  // const breedData = props.breed[0];
  // let description: string = "";
  // let name: string = "";

  // try {
  //   name = breedData.name;
  //   description = breedData.description;
  // } catch (error) {
  //   name = "";
  //   description = "";
  //   console.log(`The error occured here: ${breedData}`);
  //   setError(true);
  // }

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [breedData, setBreedData] = useState<BreedType>();
  const [moreImages, setMoreImages] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const RouterbBreedId = router.query.breed;
  console.log("RouterbBreedId: ", RouterbBreedId);
  const breedId = "beng";

  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    if (!isFirst) {
      return;
    }

    if (isFirst) {
      setIsFirst(false);
    }
    async function fetchData() {
      try {
        setIsLoading(true);

        if (breedId === undefined) {
          throw new Error("no breed id found");
        }
        const catApiResponse = await GET_AJAX(
          `/images/search?breed_ids=${RouterbBreedId}`
        );
        console.log(catApiResponse);
        setBreedData(catApiResponse.message[0].breeds[0]);

        // get more images from the cat API:
        let moreImagesResponse = await GET_AJAX(
          `/images/search?limit=10&breed_ids=${"beng"}`
        );

        setMoreImages(() => {
          return moreImagesResponse.message.map((data: { url: string }) => {
            return data.url;
          });
        });

        setName(() => {
          if (breedData?.name) {
            return breedData?.name;
          } else {
            return "error";
          }
        });
        setDescription(() => {
          if (breedData?.description) {
            return breedData?.description;
          } else {
            return "error";
          }
        });

        console.log(breedData);
        console.log(moreImages);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    fetchData();
  }, [
    breedData,
    breedData?.description,
    breedData?.name,
    breedId,
    isFirst,
    moreImages,
    RouterbBreedId,
  ]);

  function generateHtml() {
    if (error || !breedData) {
      return (
        <p>
          An error occured.
          <br /> Please try again
        </p>
      );
    } else {
      return <BreedMain moreImages={moreImages} breed={breedData!} />;
    }
  }

  // if(!breedData){

  // }

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fragment>{generateHtml()}</Fragment>
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
