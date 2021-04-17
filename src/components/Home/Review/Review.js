import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then( data => {
            setReviews(data);
        })
    },[])
    return (
        <section className="reviews my-5 py-2">
            <div className="container">
                <div className="section-header">
                    <h5 style={{color: '#993337'}} className="text-uppercase">reviews</h5>
                    <h1>What's Our Customer <br/> Says</h1>
                </div>
                <div className="card-deck mt-5 d-flex justify-content-center reviewRow">
                    
                    {
                        reviews.map( review => <ReviewDetails key={review._id} review = {review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;