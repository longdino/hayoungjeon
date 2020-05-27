import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hayoung Jeon</h2>
            <img
              src={require("../static/profile.jpg")}
              alt="avatar"
              style={{ height: "250px", border: "2px solid black" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Howdy! I'm currently pursuing B.S. degree in Computer Science in
              Texas A&M, and I will be pursuing Master in Computer Science
              program in Texas A&M starting the Fall 2020. My interested areas
              are computer vision, software development, computer graphics,
              database, machine learning, and game development.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
