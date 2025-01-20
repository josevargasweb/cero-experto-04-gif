import { GiphyImage, Gyphy } from "../models/giphy.models";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=2Pt6uxRkqlFTPzn0RCaUxTlGJVGsKVuA&q=${category}&limit=10`;
  const rest = await fetch(url);
  const {data = []} = await rest.json();
  const gifs: GiphyImage[] = data.map((img: Gyphy) => ({
    id: img.id,
    image: img.images.downsized_medium.url,
    title: img.title
  }));
  
  return gifs;

}