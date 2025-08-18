import "../Styles/StepsSection.css";
import React from "react";
import Steps from "./Steps";
import Heading from "./Heading";

const StepsSection = () => {
    let imageLink = require('../Assets/Images/app-iPhone.png');
    let appStoreIcon = require('../Assets/Images/download-app-store-icon.png');
    let googlePlayIcon = require('../Assets/Images/download-app-android-icon.png');
    let stepNumber = [1, 2, 3];
    let title = ["Choose the subscription plan that best fits your needs and sign up today.", "Order your delicious meal using our mobile app or website. Or you can even call us!", "Enjoy your meal after less than 20 minutes. See you the next time!"];
    return (
        <section className="steps-section">
            <Heading title="How It Works - Simple As 1, 2, 3" color="#555555" />
            <hr style={{ backgroundColor: '#e67e22', width: '100px', height: '3px', border: 'none', borderRadius: '5px', marginBottom: '20px' }} />
            <div className="steps-container">
                <img src={imageLink} alt="App on iPhone" className="app-image" />
                <div className="steps">
                    <Steps stepNumber={stepNumber} title={title}/>
                    <div className="app-icons">
                        <img src={appStoreIcon} alt="Download on App Store" className="app-icon" />
                        <img src={googlePlayIcon} alt="Get it on Google Play" className="app-icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StepsSection;