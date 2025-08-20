import React from "react";
import "../Styles/Review.css";

const Review = ({ name, text, image }) => {
    return (
        <div className="review">
            <h4 className="colon">“</h4>
            <p className="review-text">{text}</p>
            <div className="reviewer">
                <img src={require(`../Assets/Images/${image}`)} alt={name} className="reviewer-image" />
                <h4 className="reviewer-name">{name}</h4>
            </div>
        </div>
    )
}

export default Review;