import {get} from "@/api/base";
const apiKey = "88e836ce"
const seriesID = "tt0903747"
const baseURL = `http://www.omdbapi.com/?apikey=${apiKey}`

export const getSeriesInfo = async () => {
   const res = await get(`${baseURL}&i=${seriesID}`);
   return res;
}