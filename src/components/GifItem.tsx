import { GiphyImage } from '../models/giphy.models';

export const GifItem: React.FC<GiphyImage> = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}