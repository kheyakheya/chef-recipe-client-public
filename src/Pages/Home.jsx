import React, { useEffect, useState } from 'react';
import HomeBanner from '../Component/HomeBanner';
import ChefCard from '../Component/chefCard';

const Home = () => {
    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=> setChefs(data))
    },[])
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='my-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {chefs?.map(chef=><ChefCard key={chef.id} chef={chef}></ChefCard>)}

            </div>

        </div>
    );
};

export default Home;