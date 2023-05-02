import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import LoadingPage from '../Pages/LoadingPage';

const MainLayout = () => {
    const navigation= useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>{navigation.state==='loading' && <LoadingPage></LoadingPage>}</div>

            <div className='px-4 md:px-8'><Outlet></Outlet></div>
            <Footer></Footer>
    
        </div>
    );
};

export default MainLayout;