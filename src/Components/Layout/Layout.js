import React, {Fragment} from 'react';
import {Col, Row} from "reactstrap";
import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
    return (
        <Fragment>
            <Navigation/>
            <Row>
                <Col className="text-center">{props.children }</Col>
            </Row>
        </Fragment>

    );
};

export default Layout;