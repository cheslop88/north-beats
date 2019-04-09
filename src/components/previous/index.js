import React, { Component } from "react";
import Slider from "react-slick";

export default class Previous extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="center_wrapper previous_section">
        <h2>North Beats 2018</h2>
        <p>See highlights from North Beats 2018</p>
        <Slider
          className="main"
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
          <div>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          </div>
        </Slider>
        <Slider
          className="thumbnails"
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
          <img src="https://placeimg.com/640/480/arch" alt="madchester"/>
        </Slider>
      </div>
    );
  }
}