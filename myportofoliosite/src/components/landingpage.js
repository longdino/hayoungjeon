import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG1zHE3cQrGjw/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=LBSCVigJm5W3dOyLG7hWtLa9oqwlBsGInz8srTI_6_A"
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
