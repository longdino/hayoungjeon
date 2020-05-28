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

import Composition1 from "../static/Composition1.pdf";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="music-grid">
          {/* Music 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "10px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center / cover",
              }}
            >
              우린 기다리네
            </CardTitle>
            <CardText>
              Revelation 4:1 "After his I looked, and behold, a door standing
              open in haeven! And the first voice, which I had heard speaking to
              me like a trumpet, said, "Come up here, and I will show you what
              must take place after this.""
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
