import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container' style={{ height: 74 }}>
            <div className="flex items-center justify-center" style={{ height: 42, background: "#D5E8FF", gap: 50 }}>
                <div className='text-sm text-black cursor-pointer footer-element'>Home</div>
                <div className='text-sm text-black cursor-pointer footer-element'>FAQ’s</div>
                <div className='text-sm text-black cursor-pointer footer-element'>Contact Us</div>
                <div className='text-sm text-black cursor-pointer footer-element'>Terms & Conditions</div>
                <div className='text-sm text-black cursor-pointer footer-element'>Privacy Policy</div>
            </div>
            <div className='h-8 text-xs flex items-center justify-center' style={{ background: "#181F31", color: "#BDBDBD" }}>
                Copyrights 2024. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;