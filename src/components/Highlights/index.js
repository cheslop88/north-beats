import React from 'react';
import Description from './Description';
import Discount from './Discount'; 

const Highlights = () => {
    return (
        <div className="highlight_wrapper center_wrapper">
            <Description/>
            <Discount/>
        </div>
    );
};

export default Highlights;