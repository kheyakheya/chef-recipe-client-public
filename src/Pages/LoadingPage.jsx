import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <progress className="progress progress-warning w-56" value="70" max="100"></progress>   
        </div>
    );
};

export default LoadingPage;