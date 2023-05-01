import React from 'react';

const ChefBanner = ({detail}) => {
    const {chefPicture, chefName, yearsOfExperience, bio, numberOfRecipes, likes}=detail;
    return (
       <div className='flex justify-center items-center m-8 md:mx-40 md:my-16  '>
        <div className='flex flex-col justify-center items-center' >
        <img className='shadow-md shadow-orange-400 w-64 h-64 rounded-full' src={chefPicture} alt="chef" />
        <div className=' flex flex-col items-center my-8  leading-8'>
        <div>
        <h2 className='italic text-center text-4xl my-6 font-bold '>{chefName}</h2>
        <p className='text-center text-xl mb-4 italic'>{bio}</p>
        </div>
        <div>
        <p className='italic'><span className='text-3xl font-bold'>{yearsOfExperience}+</span> years of experience</p>
        <p className='italic'><span className='text-3xl font-bold'>{numberOfRecipes}+</span>Recipes </p>
        <p className='italic'><span className='text-3xl font-bold'>{likes}+</span> Likes</p>
        </div>
        </div>
        </div>
       </div>

    );
};

export default ChefBanner;