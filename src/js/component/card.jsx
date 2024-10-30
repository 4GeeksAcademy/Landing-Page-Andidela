import React from "react";
const Card = ({img, title, description, buttonText}) => {
    return (
        <div className="card" style={{width: "18rem", marginTop: 20, marginBottom: 20}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary d-flex justify-content-center">{buttonText}</a>
                </div>
        </div>

    );
};

export default Card;
