import { GET_AJAX } from "@/ajax/GET_AJAX";
import Body from "@/components/welcome-page/Body";
import Hero from "@/components/welcome-page/Hero";
import { BreedType, SearchHistoryType } from "@/utils/types";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat breed wiki</title>
        <meta name="description" content="a wikipedia of cat breeds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <Body />
    </>
  );
}

// async function put(
//   breedsList: { name: string; id: string; frequency: number }[]
// ) {
//   const putResponse = await fetch(
//     "https://cat-wiki-a00ec-default-rtdb.firebaseio.com/search-history.json",
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(breedsList),
//     }
//   );

//   console.log(await putResponse.json());
// }

export async function getStaticProps() {
  // fetch the search history from the database
  // try {
  //   const response = await fetch(
  //     "https://cat-wiki-a00ec-default-rtdb.firebaseio.com/search-history.json"
  //   );

  //   if (response.status != 200) {
  //     throw new Error("an error occured");
  //   }
  //   const data: SearchHistoryType[] = await response.json();

  //   data.sort((currentHistory, nextHistory) => {
  //     return nextHistory.frequency - currentHistory.frequency;
  //   });

  //   console.log(data.slice(0, 3));

  //   // returnData = searchHistory.slice(0, 3);

  //   // console.log(searchHistory);
  // } catch (error) {
  //   console.log(error);
  // }
  // sort in DSC order

  // return the first 3

  const response = await GET_AJAX("/breeds/");
  let breedsList: SearchHistoryType[];
  if (response.success) {
    const breeds: BreedType = response.message;
    breedsList = response.message.map(
      (breed: { name: string; id: string; image: { url: string } }) => {
        return {
          name: breed.name,
          id: breed.id,
          frequency: 0,
          imageUrl: breed.image.url,
        };
      }
    );

    console.log(breedsList);
  }

  // console.log(breedsList);

  return {
    props: {
      data: 1,
    },
  };
}
