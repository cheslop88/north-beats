import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class Performing extends Component {

    state = {
        days:['Friday','Saturday','Sunday'],
        support:[
            'DJ Tremor Impulse Double Trouble Limitless Chrono',
            'Basse-Culade DJ Astuce DJ Bliss Daydream Refresh',
            'Stranger Dig Ghost DJ Questune DJ Dexter'
        ],
        headline: [
            'DJ Venom',
            'DJ Nerf',
            'Fluke'
        ],
        supportHeadline: [
            'Pyro Databass Aria',
            'Friction DJ Treble Trouble Minister',
            'Encore Alcool Atmos'
        ],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.days.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="performing_item">
                    <div className="performing_inner_wrapper">
                        <div className="performing_title">
                            <span>{this.state.days[i]}</span>
                        </div>
                        <div className="performing_description">
                            <h3>{this.state.headline[i]}</h3>
                            <h4>{this.state.supportHeadline[i]}</h4>
                            <p>{this.state.support[i]}</p>
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_white">
                <div className="center_wrapper performing_section">
                    <h2>Performing</h2>

                    <div className="performing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Performing;