import createError from "./error";
import { createLoader } from "./loader";
import { removeLoader } from "./loader";
import createBlock from "./createBlock";

const getNews = async (value) => {
  createLoader();
  const data = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=${value ?? ''}&apiKey=f7b6520c112648e1871ca8daaef02bb8`),
          json = await data.json();
     await removeLoader();
    if (data.ok) {
      createBlock(json);

    } else {
      createError();
    }
}

export default getNews;
