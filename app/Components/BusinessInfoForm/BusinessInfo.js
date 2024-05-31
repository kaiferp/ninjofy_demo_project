import React from 'react';
import BusinessInfoContent from './BusinessInfoContent';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BusinessInfo = () => {
    return (
        <div className="bsnProfilePage h-full flex flex-col">
            <Header />
            <BusinessInfoContent />
            <Footer />
        </div>
    );
}

export default BusinessInfo;
