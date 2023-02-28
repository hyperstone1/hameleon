import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './index.scss';
import { imgsWorks } from '../../constants/constants';

const Works = () => {
  return (
    <div id="works" className="works">
      <div className="works_container">
        <h1 className="title">Наши работы</h1>
        <div className="cards_container">
          <Row xs={1} md={3} className="g-4">
            {imgsWorks.map((item, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Link href={item.url} target="_blank">
                    <Card.Img variant="top" src={require(`${item.src}`)} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                  </Card.Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Works;
