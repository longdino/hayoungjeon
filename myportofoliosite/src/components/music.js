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
  CardText,
} from "react-mdl";

import Composition1 from "../static/music/Composition1.pdf";
import Composition2 from "../static/music/Composition2.pdf";
import Composition3 from "../static/music/Composition3.pdf";
import Composition4 from "../static/music/Composition4.pdf";

import Arr1 from "../static/music/Arr1.m4a";
import Arr2 from "../static/music/Arr2.m4a";
import Arr3 from "../static/music/Arr3.m4a";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="music-grid">
          {/* All 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              우린 기다리네
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition1} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* All 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주 사랑 내 안에
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition2} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* All 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주 오셔서
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition3} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* All 4*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주는 나의 힘
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition4} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="music-grid">
          {/* Comp 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              우린 기다리네
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition1} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* Comp 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주 사랑 내 안에
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition2} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* Comp 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주 오셔서
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition3} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* Comp 4*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              주는 나의 힘
            </CardTitle>
            <CardText>Hayoung Jeon</CardText>
            <CardActions border>
              <a href={Composition4} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="music-grid">
          {/* Arr 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#111",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              Jesus Loves Me, this I Know
            </CardTitle>
            <CardText>Anna B. Warner & William B. Bradbury</CardText>
            <CardActions>
              <a href={Arr1} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* Arr 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#111",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              I Have Found
            </CardTitle>
            <CardText>C. W. Fry & J. R. Murray</CardText>
            <CardActions>
              <a href={Arr2} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
              </a>
            </CardActions>
          </Card>
          {/* Arr 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#111",
                height: "176px",
                fontWeight: "700",
                background:
                  "url(https://cdn.pixabay.com/photo/2018/03/12/22/15/music-notes-3221097_960_720.jpg)",
              }}
            >
              Abundant Love of Jesus
            </CardTitle>
            <CardText>G. A. Minor</CardText>
            <CardActions>
              <a href={Arr3} rel="noopener noreferrer" target="_blank">
                <Button colored>See More</Button>
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
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>Composition</Tab>
          <Tab>Arrangement</Tab>
        </Tabs>
        <section className="music-grid">
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

export default Music;
