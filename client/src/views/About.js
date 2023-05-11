import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <Button href="https://portfolio-ng-ha.vercel.app/" variant="primary" size="lg">
            Visit my personal portfolio now for more information!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
