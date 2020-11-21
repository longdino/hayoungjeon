import React, { Component, Fragment } from "react";
import { Grid, Cell } from "react-mdl";
import PROJ from "../static/Proposal.pdf";
import UPDATE from "../static/Update.pdf";
//import styled, { keyframes } from "styled-components";

class Csce extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>CSCE641</h2>
                        <a href={PROJ} rel="noopener noreferrer" target="_blank">
                            Proposal
                        </a>
                        <br></br>
                        <a href={UPDATE} rel="noopener noreferrer" target="_blank">
                            Update Report
                        </a>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Csce;