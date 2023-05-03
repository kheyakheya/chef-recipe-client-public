import React, { useEffect, useState } from 'react';
import HomeBanner from '../Component/HomeBanner';
import ChefCard from '../Component/chefCard';
import AboutUs from '../Component/AboutUs';
import JoinUs from '../Component/JoinUs';

const Home = () => {
    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=> setChefs(data))
    },[])
    
    return (
        <div className='mb-32'>
            <HomeBanner></HomeBanner>
            <div className='my-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {chefs?.map(chef=><ChefCard key={chef.id} chef={chef}></ChefCard>)}

            </div>
            <AboutUs></AboutUs>
            <JoinUs></JoinUs>

        </div>
    );
};

export default Home;