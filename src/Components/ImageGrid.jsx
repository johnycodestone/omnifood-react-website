import React from "react";
import "../Styles/ImageGrid.css";

const ImageGrid = () => {
    const images = [
        { src: "home-grid-1.jpg", alt: "Home Grid Image 1" },
        { src: "home-grid-2.jpg", alt: "Home Grid Image 2" },
        { src: "home-grid-3.jpg", alt: "Home Grid Image 3" },
        { src: "home-grid-4.jpg", alt: "Home Grid Image 4" },
        { src: "home-grid-5.jpg", alt: "Home Grid Image 5" },
        { src: "home-grid-6.jpg", alt: "Home Grid Image 6" },
        { src: "home-grid-7.jpg", alt: "Home Grid Image 7" },
        { src: "home-grid-8.jpg", alt: "Home Grid Image 8" },
    ]
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div className="image-grid-item" key={index}>
                    <img className="img" src={require(`../Assets/Images/${image.src}`)} alt={image.alt} />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;