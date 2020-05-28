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
            <CardText>
              "이 일 후에 내가 보니 하늘에 열린 문이 있는데 내가 들은 바 처음에
              내게 말하던 나팔 소리 같은 그 음성이 이르되 이리로 올라오라 이
              후에 마땅히 일어날 일들을 내가 네게 보이리라 하시더라" (계 4:1)
            </CardText>
            <CardActions border>
              <a href={Composition1} rel="noopener noreferrer" target="_blank">
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
