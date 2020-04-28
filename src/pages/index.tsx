import React from 'react';
import Carousel from '../components/ui/Carousel';


const Index = ({ title = 'Contact List' }) =>
    <div>
        <h1 style={{color:'#575757', display:'flex', justifyContent:'center'}}>{title}</h1>
        <Carousel/>
    </div>;

export default Index;