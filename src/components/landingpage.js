import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

/* Reference by https://www.30secondsofcode.org/react/s/mailto */
function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {props.children}
    </a>
  );
}

/* Reference by  https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf*/
const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`};
`;

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={6} className="landingCell1">
            <Bounce>
              <h1>Welcome to My Website</h1>
            </Bounce>
          </Cell>
          <Cell col={6} className="landingCell2">
            <div className="banner-text">
              <h1>Software Developer</h1>
              {/* <hr /> */}
              <p>C/C++ | Python | C# | JavaScript | React | Python | Swift</p>
              <hr />
              <h1>Musician</h1>
              {/* <hr /> */}
              <p>Drums | Compose | Arrange</p>
              <hr />
              <Mailto
                email="hayung@gmail.com"
                subject="Recruitment"
                body="Hello Hayoung, "
              >
                <h1>Contact Me</h1>
              </Mailto>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hayoungjeon/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                  {/*<i className="fa fa-linkedin-square" aria-hidden="true" />*/}
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/longdino"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Email */}
                <Mailto
                  email="hayung@gmail.com"
                  subject="Help Needed"
                  body="Hello Hayoung, "
                >
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </Mailto>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
