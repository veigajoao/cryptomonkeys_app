import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const BuyBoxes = () => {

    return (
      <Fragment>
        <TransitionGroup style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row noGutters className="text-center" style={{width: "80%"}}>
              <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle>Open your portals</CardTitle>
                    <div className="divider" />
                    <Row noGutters className="text-center">
                        <Col xs="12" md="4">
                            Common
                        </Col>
                        <Col xs="12" md="4">
                            Rare
                        </Col>
                        <Col xs="12" md="4">
                            Epic
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
