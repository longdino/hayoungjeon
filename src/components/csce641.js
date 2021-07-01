import React, { Component } from "react";
import { Grid, Cell, ListItemContent, ListItem, List } from "react-mdl";
import PROS from "../static/Proposal_Jeon.pdf";
import PROJ from "../static/Proposal.pdf";
import UPDATE from "../static/Update.pdf";
//import styled, { keyframes } from "styled-components";

class Csce extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="content-grid">
                    <Cell col={12}>
                        <h2>Camera View with 3D Projection</h2>
                        <a href={PROS} rel="noopener noreferrer" target="_blank">
                            Proposal 2020/11/05
                        </a>
                        <br></br>
                        <a href={PROJ} rel="noopener noreferrer" target="_blank">
                            Proposal (Updated) 2020/11/20
                        </a>
                        <br></br>
                        <a href={UPDATE} rel="noopener noreferrer" target="_blank">
                            Update Report 2020/11/20
                        </a>
                        <h3>Summary</h3>
                        <p>I had an internship in a surveillance cameray systems company when I was an undergraduate student.
                        As I work, I found out that it is challenging for the customers to select right cameras for their environments.
                        Every camera has its own specifications in terms of the focal length and the field of view(FOV), and they display significantly different views.
                        Furthermore, the measurements of the installation environments are also different.
                        Because the camera view is totally different from their expectation, there are many cases of returning the security cameras.
                        Although the company present the preview of the camera specifications, it does not show how the room would be viewed through the camera with those specifications.
                        </p>
                        <img
                            src={require("../static/idis1.png")}
                        />
                        <img
                            src={require("../static/idis2.png")}
                        />
                        <p>In computer graphics, the view frustum can play the important role for this kind of issues.
                        The view frustum can display the FOV originated from the perspective of virtual camera system.
                        With the view frustum, we can simulate the modeled world that apperas on the screen.
                        This project is important, because I always thought how I could apply the knowledge of computer graphics to industries.
                        Even though 3D projection is not creative technology anymore in computer graphics, it is still not introduced especially to small companies.
                        Therefore, I have decided to create multiple camera views on 3D projection.
                        </p>
                        <h3>Previous Works</h3>
                        <p>There have been previous studies to maximize the utility of the view frustum.
                        There is a method of computing a view frustum for a 3D object with a given viewpoint [Low et al. 2003].
                        Several 3D rendering techniques have been developed, and there are also studies about developing the view frustum considering the oblique point of view as well [Lengyel, 2004].
                        I have decided to focus on vertical FOV that can display camera view with different specifiaction.
                        Besides research paper, I also studied the focal length and view frustum through other websites such as https://www.edmundoptics.com/knowledge-center/application-notes/imaging/understanding-focal-length-and-field-of-view/.
                        The formula I used to compute FOV is from the website I previously mentioned.
                        </p>
                        <p>I started my project from the skeleton code of one of my graphics assignment from my undergraduate studies (CSCE 441 from TAMU).
                        One of my assignment was to represent free-look world of several bunny and teapot objects.
                        Instead of walking around the world, I decided to create room and several objects such as bunny, teapot, and human.
                        I already had some obj files, and I downloaded free obj files from turbosquid.com to load and display it in the room.
                        Then I featured the camera to set on the object inside the room.
                        </p>
                        <h3>Description of Work</h3>
                        <p>To achieve this project, there have been several tasks to complete: </p>
                        <List className="tasks-list">
                            <ListItem>
                                <ListItemContent>
                                    - Display multiple windows
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    - Load obj files to create room environment
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    - Simulate different camera view on each window
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    - Compute actual FOV of camera given specs: focal length and sensor size
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    - Enable the program to take inputs which are camera specifications (focal length, sensor size, horizontal FOV, vertical FOV of each camera)
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent>
                                    - Enable the user to simulate room and camera views with keys
                                </ListItemContent>
                            </ListItem>
                        </List>
                        <p>It is important to display multiple windows, becuase I need to display different camera views of two cameras and a camera view of entire room.
                        This will enable users to understand what they are actually looking at.
                        Even though I used given FOV of cameras, I wanted to compute the actual FOV and compare with the camera specifications.
                        To compute this, I used the formula: AFOV = 2 X arctan(h/2f).
                        This computes the angular FOV.
                        The f represents the focal length of the camera, and the h represents the sensor size of camera.
                        However, I needed to be aware that the sensor size I have is diagonal length in inches.
                        I needed to convert inches to milimeters, calculate horizontal and vertical h given the sensor size, and to compute vertical FOV and horizontal FOV of each camera.
                        </p>
                        <p>The biggest challenge I had was that I had less time relatively.
                        I have changed my project idea then I had only two weeks to work on.
                        The time management was the key to achieve this project.
                        In project-wise, the main challenge I had was to init and render each window without explosion of the program.
                        Also, I had to make sure how this could be utilized, how this could benefit practically.
                        </p>
                        <h3>Results</h3>
                        <p>As a result, I could successfully present a camera view with 3D projection.
                        I created three winodws: main camera, camera view of first camers, and camera view of second camera.
                        I can take inputs; focal length, sensor size and vertical FOV of each camera.
                        Then I compute vertical FOV and horizontal FOV to compare the computed FOVs and the actual specification of the camera.
                        Here is the data table of computed FOVs and actual FOVs of cameras.
                        </p>
                        <img
                            src={require("../static/table.png")}
                        />
                        <p>As you notice, the computed FOVs and actual FOVs are different.
                        This doesn't show that the computation is wrong.
                        This actually tells us that the cameras are not manufactured with correct FOVs.
                        It would be important to konw the FOVs which were supposed to be specification of cameras, however, it is more important to display actual camera specifications for customers.
                        Therefore, I have displayed the camera view with given FOVs.
                        </p>
                        <img
                            src={require("../static/main.png")}
                        />
                        <img
                            src={require("../static/camera1.png")}
                        />
                        <img
                            src={require("../static/camera2.png")}
                        />
                        <h3>Analysis</h3>
                        <p>As I worked on this project, I discovered the restrictions that I can only display the camera specification for the customers even though that did not consider exact FOVs.
                        This happens becuase I'm making this project to be utilized by the company and customers.
                        However, I could conclude that it is way more simple to engage knowledge of computer graphics to practical application.
                        It is possible for computer programmers to program this as long as they have knowledge of computer graphics.
                        From here, I should be able to improve furtehr for goals I have not met, and for programmers who has no knowledge of computer grahpics at all.
                        </p>
                        <p>I have met all the goals I've listed in the Description of Work section except the one that is about the key movement.
                        I could simulate keys to move camera views in main camera view, however, I have not enable the key movement on each camera views.
                        Some cameras are fixed, so it wouldn't be matter to those, but there could be cameras that can pan, tilt, or even rotate.
                        If I continue engaging on this, I could improve on creating more camera movements considering those features.
                        Also, this program could be used by users if this can be run inside the website.
                        To make it possible, it would be better to convert my code to webGL instead of using openGL library.
                        This would be more related to software engineering area rather than improving more on computer graphics-wise.
                        </p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Csce;