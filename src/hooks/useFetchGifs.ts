import { useEffect, useState } from "react";
import { GiphyImage } from "../models/giphy.models";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<GiphyImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async (category: string) => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages(category);
    
  }, [category]);

  return {
    images,
    isLoading
  }
}
