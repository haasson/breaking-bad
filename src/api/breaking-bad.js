import {get} from "@/api/base";

const baseURL = "https://www.breakingbadapi.com/api";

export const getAllEpisodes = async () => {
   const res = await get(`${baseURL}/episodes?series=Breaking+Bad`)
   return res;
};

export const getAllCharacters= async () => {
   const res = await get(`${baseURL}/characters`);
   return res;
};

export const getAllDeaths= async () => {
   const res = await get(`${baseURL}/deaths`);
   return res;
};

export const getQuotesByName= async (name) => {
   const res = await get(`${baseURL}/quote?author=${name}`);
   return res;
};