import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({rec}) => {
    const [favourite,setFavourite]=useState(false);
    const {name,ingredients,cookingMethod, rating}=rec;
    const handleFavourite=()=>{
        setFavourite(true);
        toast("Added to Favourite");

    }
    return (
        <div>
            <div className="card h-full w-96 bg-base-100 shadow-xl shadow-orange-400 ">
                <div className="card-body">
                    <h2 className="card-title mb-5 mt-4 italic text-orange-400">{name}</h2>
                    <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
                    <p><span className='font-bold'>Cooking Method:</span> {cookingMethod}</p>
                    <div className='flex items-center '>
                    <Rating style={{ maxWidth: 150 }} value={Math.round(rating)} readOnly />
                    <span className='text-xl ms-2'>{rating}</span>
                    </div>
                    <div className="card-actions justify-end">
                    <button onClick={handleFavourite} disabled={favourite} className="btn border-none bg-orange-400">Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;