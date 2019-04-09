import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">North Beats Festival</div>
                <div className="footer_copyright">
                    Copyright 2019.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;