import { StaticImageData } from "next/image";

export type ExpectedBreedData = {
  image: StaticImageData;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  lifeSpan: string;
  details: {
    adaptability: number;
    "affection level": number;
    "child friendly": number;
    grooming: number;
    intelligence: number;
    "health issues": number;
    "social needs": number;
    "stranger friendly": number;
  };

  moreImages: StaticImageData[];
};
