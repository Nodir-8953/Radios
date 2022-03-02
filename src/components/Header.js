import React from 'react';
import Logo from '../images/logo.png'
import { Container, Row, Col } from 'reactstrap'

const Header = () => {
    return (
        <div className='header2'>
            <Container className='header'>
                <Row>
                    <Col sm="2">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="10" >
                        <div className="navbar">
                            <ul>
                                <li><a href="#">radios</a></li>
                                <li><a href="#">radios</a></li>
                                <li><a href="#">radios</a></li>
                                <li><a href="#">radios</a></li>
                                <li><a href="#">noutus</a></li>
                                <li><a href="#">kontakti</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
<>
</>