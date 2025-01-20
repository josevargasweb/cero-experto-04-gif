import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface GifGridProps {
  category: string
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);



  return (
    <>
      <h3>{category}</h3>
      {
        isLoading
          ? (<h2>Cargando...</h2>)
          :
          <div className="card-grid">
            {
              images.map((img) => (
                <GifItem
                  key={img.id}
                  {...img}
                />
              ))
            }
          </div>
      }


    </>
  )
}
