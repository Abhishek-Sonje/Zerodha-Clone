import React from 'react'

import Hero from './Hero';
import Universe from './Universe';
import Navbar from '../Navbar';
import Footer from '../Footer'
import LeftAndRight from './LeftAndRight';



function ProductPage() {
    return (
      <>
        <Hero />
        <LeftAndRight/>
        <Universe />
      </>
    );
}

export default ProductPage;