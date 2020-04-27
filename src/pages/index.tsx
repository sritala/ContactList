import React from 'react';
import Carousel from '../components/ui/Carousel';


const Index = ({ title = 'Hello from next.js' }) =>
    <div>
        <h2 style={{color:'#575757', display:'flex', justifyContent:'center'}}>{title}</h2>
        <Carousel/>
    </div>;

export default Index;