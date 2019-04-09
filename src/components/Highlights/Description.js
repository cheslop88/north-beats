import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
    return (
        <Fade>
                <h2>About</h2>
                <div class="highlight_container">
                    {/*<div className="highlight_image">
                        <img src="https://placeimg.com/640/480/arch" alt="Gateshead" width="320"></img>
                    </div>*/}
                    <div className="highlight_description">
                    Baltic Square is a versatile space directly outside BALTIC Centre for Contemporary Art. Wander over the iconic Gateshead Millennium Bridge to explore and discover creative installations and experiences.
                    </div>
                </div>
        </Fade>
    );
};

export default Description;