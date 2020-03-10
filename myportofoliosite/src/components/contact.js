import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hayoung Jeon</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG1zHE3cQrGjw/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=LBSCVigJm5W3dOyLG7hWtLa9oqwlBsGInz8srTI_6_A"
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
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (214) 385-9511
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    hayung@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    https://www.linkedin.com/in/hayoungjeon/
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    https://github.com/longdino
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
