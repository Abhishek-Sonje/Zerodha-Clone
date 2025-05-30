import React from 'react'

import Hero from './Hero';
import Charges from './Charges';
import AccountCharges from './AccountCharges';
import AddedServicesCharges from './AddedServicesCharges';

function PricingPage() {
    return ( 
        <>
       
            <Hero/>
            <Charges/>
            <AccountCharges />
            <AddedServicesCharges/>
             
        </>
     );
}

export default PricingPage;