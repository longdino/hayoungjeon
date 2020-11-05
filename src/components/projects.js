import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              Motion Capture System
            </CardTitle>
            <CardText>
              Developed a low-cost motion capture system using smartphones to
              resolve healthcare issues using Python and OpenCV.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/multiobject-tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              IDIScan
            </CardTitle>
            <CardText>
              Developed a Lightweight Inventory Management System Prototype
              using Python, Swift, and MySQL
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/IDIScan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              Dungeon Duel
            </CardTitle>
            <CardText>
              Developed a roguelike game with a website based on Java Script as
              a semester-long project in Texas A&M.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/Game_Project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          {/*Others Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              The Fox and The Forest
            </CardTitle>
            <CardText>
              Created and developed a 2D side scroller game with a website
              called, “The Fox and The Forest,” using Godot Engine.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/CSCE443"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Python Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              Motion Capture System
            </CardTitle>
            <CardText>
              Developed a low-cost motion capture system using smartphones to
              resolve healthcare issues using Python and OpenCV.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/multiobject-tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          {/*Python Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              IDIScan
            </CardTitle>
            <CardText>
              Developed a Lightweight Inventory Management System Prototype
              using Python, Swift, and MySQL
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/IDIScan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/*JavaScript Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              Dungeon Duel
            </CardTitle>
            <CardText>
              Developed a roguelike game with a website based on Java Script as
              a semester-long project in Texas A&M.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/Game_Project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          {/*Swift Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              IDIScan
            </CardTitle>
            <CardText>
              Developed a Lightweight Inventory Management System Prototype
              using Python, Swift, and MySQL
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/IDIScan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          {/*Others Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover"
              }}
            >
              The Fox and The Forest
            </CardTitle>
            <CardText>
              Created and developed a 2D side scroller game with a website
              called, “The Fox and The Forest,” using Godot Engine.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/longdino/CSCE443"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>Python</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Swift</Tab>
          <Tab>Others</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
