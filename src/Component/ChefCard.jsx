import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="chef" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-400">{chefName}</h2>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>Number of Recipes: {numberOfRecipes} </p>
                    <p>Likes: {likes} years</p>
                    <div className="card-actions justify-start my-2">
                        <Link to={`/${id}`}>
                        <button className="btn border-none bg-orange-400">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;