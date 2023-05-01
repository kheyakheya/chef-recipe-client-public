import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../Component/ChefBanner';
import RecipeCard from '../Component/RecipeCard';

const ChefDetail = () => {
    const detail=useLoaderData();
    const {recipes}=detail;
    return (
        <div>
            <h2 className='text-center mt-16  text-6xl text-orange-400 font-bold italic'>Chef Recipes</h2>
            <ChefBanner detail={detail}></ChefBanner>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mb-16'>
            {recipes?.map(rec=><RecipeCard key={rec.id} rec={rec}></RecipeCard>)}

            </div>
        </div>
    );
};

export default ChefDetail;