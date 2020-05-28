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
            <CardText>
              문득 곡을 쓰다가 저를 비추는 햇빛을 보면서 제가 마치 하나님 아버지
              앞에서 사랑을 느끼며 즐거워 한다고 느끼게 되었습니다. 그 때 느꼈던
              햇살같았던 사랑이 여러분들에게도 느껴지길 바랍니다.
            </CardText>
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
            <CardText>
              주일 새벽 2시, 가장 고요했던 그 시간에 주님만 바라본다면 어떤
              느낌일까 하는 생각에 쓴 곡입니다. 다시 한 번 내 죄를 고백하고 예수
              그리스도를 통해서 회복하고 거듭나기를 바랍니다.
            </CardText>
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
            <CardText>
              문득 대학교 3학년 때 제가 매우 작은 존재로 여겨진 적이 있었습니다.
              그 때 다시 자존감을 회복하고 제 정체성을 확립하고 싶었던 마음에
              쓰다 보니 이런 고백이 나왔습니다. 그리스도의 정체성을 다시
              회복시키시길 바랍니다.
            </CardText>
            <CardActions border>
              <a href={Composition4} rel="noopener noreferrer" target="_blank">
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
