import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'

export default function RatingForm({ saveRating, product }) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  
  const submitRating = () => {
    const outOf5 = rating/20
    saveRating(product.id, {
      score: outOf5,
      review: comment
    })
    setComment("")
    setRating(0)
  }



  return (
    <div className="tile is-child ">
      <article className="media box">
        <figure className="media-left">
          <Rating onClick={setRating} ratingValue={rating} productId={product.id} />
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add your review" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button" onClick={submitRating}>Post Rating</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
