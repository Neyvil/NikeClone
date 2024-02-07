import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className=" max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold
      ">
        What Our
        <span className=" text-coral-red"> Customers </span> 
        Say?
      </h3>
      <p className="mt-4 info-text m-auto max-w-lg text-center">Hear genuine stories from our satisfied customer's about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col items-center gap-14">
      {reviews.map((review,index)=>(
        <ReviewCard 
          key={index}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
      </div>
    </section>
  )
}

export default CustomerReviews
