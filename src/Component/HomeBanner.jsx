import React from 'react';

const HomeBanner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-around'>
            <div>
                <h1 className=' text-center mt-8 md:my-4 text-6xl text-orange-400 font-bold italic'>Chefzzzz Tray</h1>
                <p className=' text-center mt-4 text-2xl'>Find Bngladeshi cuisine <br/> with world class chefs in one tray</p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/white-chef-hat-isolated_1284-42350.jpg?size=626&ext=jpg&ga=GA1.2.373721687.1666840502&semt=ais" alt="" />
            </div>
            
        </div>
    );
};

export default HomeBanner;