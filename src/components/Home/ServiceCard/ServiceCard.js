import React from 'react';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    const {name,price, description, area,image} = service;
    return (
        <div className="card mx-3 shadow-sm singleService">
            {/* <img src={image.img} className="card-img-top" alt="..." /> */}
            {
                 service.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`}/>
                 :
                <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/services${service.img}`} alt=""/>
                }
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: <span className="">{price}&#2547;</span></p>
                <p className="card-text">{description}</p>
                <p>Available at: <span>{area}</span> </p>
                <button className="btn btn-primary mb-1 serviceBtn">Get Service</button>
            </div>
        </div>
    );
};

export default ServiceCard;