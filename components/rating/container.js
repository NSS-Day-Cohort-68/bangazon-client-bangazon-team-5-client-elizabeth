import { RatingCard } from './card'
import RatingForm from './form'

export function RatingsContainer({ ratings, saveRating, product }) {
  return (
    <div className="tile is-parent is-12 is-vertical container">
      <RatingForm saveRating={saveRating} product={product} />
      {
        ratings?.map((rating) => <RatingCard key={rating.id} rating={rating} />)
      }
    </div>
  )
}
