import React from 'react';
import "../Styles/QualitiesSection.css";
import Heading from './Heading';
import Quality from './Quality';
// import "../Styles/ionicons.min.css";


const QualitiesSection = () => {
    const features = [
  {
    icon: 'ion-ios-infinite',
    title: 'UP TO 365 DAYS/YEAR',
    description:
      'Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that\'s your style.',
  },
  {
    icon: 'ion-ios-clock',
    title: 'READY IN 20 MINUTES',
    description:
      'You\'re only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you\'re 100% happy.',
  },
  {
    icon: 'ion-leaf',
    title: '100% ORGANIC',
    description:
      'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!',
  },
  {
    icon: 'ion-ios-cart',
    title: 'ORDER ANYTHING',
    description:
      'We don\'t limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It\'s up to you!',
  },
];
    return (
        <div className="qualities-section">
            <div className="heading-box">
                <Heading title="Get Food Fast — Not Fast Food." color="#555555"/>
                <p className="sub-heading">Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
            </div>
            <div className="qualities">
                {features.map((feature, index) => (
                    <Quality 
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default QualitiesSection;