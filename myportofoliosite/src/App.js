import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
//import { MDLComponent } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import PDF from "./static/Resume.pdf";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Hayoung Jeon" scroll>
          <Navigation className="navBar">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/music">Music</Link>
            <a href={PDF} rel="noopener noreferrer" target="_blank">
              Resume
            </a>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/music">Music</Link>
            <a href={PDF} rel="noopener noreferrer" target="_blank">
              Resume
            </a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
