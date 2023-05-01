import React from 'react';

const RecipeCard = ({rec}) => {
    const {name,ingredients,cookingMethod}=rec;
    return (
        <div>
            <div className="card h-full w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-5">{name}</h2>
                    <p><span className='font-bold'>Ingredients:</span> {ingredients}</p>
                    <p><span className='font-bold'>Cooking Method:</span> {cookingMethod}</p>
                    <div className="card-actions justify-end">
                    <button className="btn border-none bg-orange-400">Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;