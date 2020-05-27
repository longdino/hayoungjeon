import React, { Component, Fragment } from "react";
import { Grid, Cell } from "react-mdl";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Media from "react-media";

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
              {/* <Media
                queries={{
                  small: "(max-width: 599px)",
                  medium: "(min-width: 600px) and (max-width: 1199px)",
                  large: "(min-width: 1200px)",
                }}
              >
                {(matches) => (
                  <Fragment>
                    {matches.small && <p>I am small!</p>}
                    {matches.medium && <p>I am medium!</p>}
                    {matches.large && <p>I am large!</p>}
                  </Fragment>
                )}
              </Media> */}
              <h1>Software Developer</h1>
              {/* <hr /> */}
              <p>C/C++ | Python | C# | JavaScript | React | Python | Swift</p>
              <hr />
              <h1>Musician</h1>
              {/* <hr /> */}
              <p>Drums | Acoustic Guitar | Bass Guitar | Compose/Arrange</p>
              <hr />
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
