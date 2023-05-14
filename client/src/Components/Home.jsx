import React,  { useEffect } from 'react';

import { Box, Typography, styled } from '@mui/material';

import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import Header2 from './Header/Header2';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import { Margin } from '@mui/icons-material';
import Footer from '../pages/Footer';

const Component = styled(Box)`
    padding: 150px 10px;
    background: #F2F2F2;
    
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
        {/* <Header2/> */}
        
            
            <Component style={{gap:'190px'}}>
                
                <Banner />
                
                <MidSection  />
                <Typography style={{textAlign:'center',marginTop:'5%',fontSize:'50px',fontWeight:'400'}}>Get Proposal</Typography>
                <MidSlide   />
                {/* <NavBar /> */}
                <Slide
                
                    data={products} 
                    title='View All Products'
                    timer={false} 
                    multi={true} 
                />
                
                {/* <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                /> */}
                
            </Component>
            <Footer/>
        </>
    )
}

export default Home;