import axios from "axios";

export const get = async (url) => {
   return await axios
      .get(url)
      .then(result => result.data)
      .catch((e) => {
         console.error(e)
         return e
      })
}








