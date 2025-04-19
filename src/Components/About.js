import React, { Component } from "react";
import Fade from "react-reveal";
import "../styles/About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: ["profilepic.jpg", "profilepic2.jpg", "profilepic3.jpg"],
      isPaused: false,
    };
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.interval = setInterval(() => {
      if (!this.state.isPaused) {
        this.setState((prevState) => ({
          currentImageIndex:
            (prevState.currentImageIndex + 1) % this.state.images.length,
        }));
      }
    }, 5000);
  };

  stopSlideshow = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  handleMouseEnter = () => {
    this.setState({ isPaused: true });
  };

  handleMouseLeave = () => {
    this.setState({ isPaused: false });
  };

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <div
                className="slideshow-container"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              >
                <img
                  className={`profile-pic profile-pic-${this.state.currentImageIndex}`}
                  src={`${process.env.PUBLIC_URL}/images/${
                    this.state.images[this.state.currentImageIndex]
                  }`}
                  alt={`${name}'s Profile`}
                />
                <div className="slideshow-dots">
                  {this.state.images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === this.state.currentImageIndex ? "active" : ""
                      }`}
                      onClick={() =>
                        this.setState({ currentImageIndex: index })
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              {bio.split("\n\n").map((paragraph, index) => (
                <p key={index}>
                  {paragraph
                    .split("*")
                    .map((text, i) =>
                      i % 2 === 0 ? text : <em key={i}>{text}</em>
                    )}
                </p>
              ))}
              <h2>Contact Details</h2>
              <div className="row">
                <div className="columns contact-details">
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {state}
                    </span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
