import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button
} from "reactstrap";

import commonPortal from "../../../assets/portals/common2.png";
import goldenPortal from "../../../assets/portals/golden2.png";
import MysticalPortal from "../../../assets/portals/mystical2.png";

const BuyBoxes = () => {

    return (
      <Fragment>
        <TransitionGroup style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row noGutters className="text-center" style={{width: "90%"}}>
              <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle>Open your portals</CardTitle>
                    <div className="divider" />
                    <Row noGutters className="text-center">
                        <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
                            <Card className="mb-1" style={{width: "80%", background: "#240940", color: "white"}}>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                                {"99+"}
                                <span className="visually-hidden">golden portals</span>
                              </span>
                              <CardImg top width="80%" src={commonPortal} alt="Common Portal" />
                              <CardBody>
                                <CardTitle style={{color: "white"}}>Common Portal</CardTitle>
                                <CardSubtitle>BUSD 80</CardSubtitle>
                                <Button color="primary" className="me-2">Open portal</Button>
                                <Button color="primary">Buy portal</Button>
                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
                            <Card className="mb-1" style={{width: "80%", background: "#240940", color: "white"}}>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                                {"99+"}
                                <span className="visually-hidden">golden portals</span>
                              </span>
                              <CardImg top width="80%" src={goldenPortal} alt="Common Portal" />
                              <CardBody>
                                <CardTitle style={{color: "white"}} >Golden Portal</CardTitle>
                                <CardSubtitle>BUSD 125</CardSubtitle>
                                <Button color="primary" className="me-2">Open portal</Button>
                                <Button color="primary">Buy portal</Button>
                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
                            <Card className="mb-1" style={{width: "80%", background: "#240940", color: "white"}}>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                                {"99+"}
                                <span className="visually-hidden">golden portals</span>
                              </span>
                              <CardImg top width="80%" src={MysticalPortal} alt="Common Portal" />
                              <CardBody>
                                <CardTitle style={{color: "white"}}>Mystical Portal</CardTitle>
                                <CardSubtitle>BUSD 200</CardSubtitle>
                                <Button color="primary" className="me-2">Open portal</Button>
                                <Button color="primary">Buy portal</Button>
                              </CardBody>
                            </Card>
                        </Col>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
}

export default BuyBoxes;
