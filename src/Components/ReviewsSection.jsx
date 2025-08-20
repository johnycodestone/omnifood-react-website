import React from "react";
import "../Styles/ReviewsSection.css";
import Review from "./Review";
import Heading from "./Heading";

const ReviewsSection = () => {
  let title = "Our Customers can`t live without us";
  let color = "white";
  let reviews = [
    {
      name: "Alberto Duncan",
      text: "Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!",
      image: "customer-1.jpg",
    },
    {
      name: "Joana Silva",
      text: "Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!",
      image: "customer-2.jpg",
    },
    {
      name: "Milton Chapman",
      text: "I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!",
      image: "customer-3.jpg",
    },
  ];

  return (
    <div className="reviews-section">
      <Heading title={title} color={color} />
      <hr
        style={{
          backgroundColor: "#e67e22",
          width: "100px",
          height: "3px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
      <div className="reviews">
        {reviews.map((review, index) => (
          <Review
            key={index}
            name={review.name}
            text={review.text}
            image={review.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
