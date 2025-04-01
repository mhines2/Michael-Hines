import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.github} target="_blank" rel="noopener noreferrer">
              <div className="portfolio-image-container">
                <Zmage alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </div>
            </a>
            <div style={{ textAlign: "center" }}>
              {projects.title}{" "}
              <a
                href={projects.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works:</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

// Add this CSS to your stylesheet
const styles = `
.portfolio-image-container {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolio-image-container:hover .overlay {
  opacity: 1;
}

.portfolio-item-meta {
  padding: 20px;
  text-align: center;
  color: white;
}

.portfolio-item-meta h5 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff;
}

.portfolio-item-meta p {
  font-size: 14px;
  line-height: 1.6;
  color: #ccc;
}

.fa-github {
  margin-left: 8px;
  font-size: 18px;
  color: #333;
  transition: color 0.3s ease;
}

.fa-github:hover {
  color: #666;
}
`;
