import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars1.githubusercontent.com/u/29418311?s=460&v=4"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Software Developer</h1>

              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Python | Swift |
                MySQL | C/C++ | C#
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hayoungjeon/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/longdino"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
