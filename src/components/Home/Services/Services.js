import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data)
        })
    },[])
    return (
        <section className="serviceSection py-5">
            <div className="container">
                <div className="sectionHeader text-center">
                    <h1>Our Services</h1>
                    <p>Our popular services in daily life!</p>
                </div>
                <div className="row card-group d-flex justify-content-center mt-5">
                    {
                        services.map( service => <ServiceCard key={service._id} service ={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;