import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TopHeader = () => {
    return (
        <div className="topHeader">
            <Container>
                <Row >
                    <Col md="4">
                        <div className="time">
                            Mon-Thu:&nbsp;
                            <span>9:00 AM - 5:30 PM</span>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="location">
                            Visit our showroom in 1234 Street Adress City Address, 1234
                            &nbsp;
                            <a href="#">Contact Us</a>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="call">
                            Call Us: (90) 123 45 67
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default TopHeader;