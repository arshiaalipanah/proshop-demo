import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    const currntYear = new Date().getUTCFullYear();

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                <p> ProShop &copy; {currntYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer