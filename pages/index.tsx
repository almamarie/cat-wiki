import Body from "@/components/welcome-page/Body";
import Hero from "@/components/welcome-page/Hero";
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
