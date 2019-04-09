import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.2315146980955!2d-1.6000596841303565!3d54.96903905963106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70bec237a937%3A0xf04b0a94f5fa097d!2sBaltic+Square!5e0!3m2!1sen!2suk!4v1554228213368!5m2!1sen!2suk" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;