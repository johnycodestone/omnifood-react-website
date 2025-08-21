import React from "react";
import "../Styles/FormsSection.css";
import Form from "./Form";
import Heading from "./Heading";

const FormsSection = () => {
    let title = "We're happy to hear from you!";
    let color = "#555555";
    return (
        <section className="forms-section">
            <Heading title={title} color={color} />
            <hr style={{backgroundColor: '#e67e22', width: '100px', height: '3px', border: 'none', borderRadius: '5px', marginBottom: '20px'}} />
            <div className="forms">
                <Form />
            </div>
        </section>
    )
}

export default FormsSection;