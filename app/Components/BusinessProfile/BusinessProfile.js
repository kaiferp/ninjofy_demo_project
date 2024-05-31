import React from 'react';
import Header from "../Header/Header";
import BusinessProfileContent from "./BusinessProfileContent";
import Footer from "../Footer/Footer";

const BusinessProfile = () => {
  return (
    <div className="bsnProfilePage h-full flex flex-col">
      <Header showNavItems={true}/>
      <BusinessProfileContent />
      <Footer />
    </div>
  );
}

export default BusinessProfile;
