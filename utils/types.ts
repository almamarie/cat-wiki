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

export type SearchHistoryType = {
  name: string;
  id: string;
  frequency: number;
  imageUrl: string;
};

export type BreedType = {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: number;
  };
};
