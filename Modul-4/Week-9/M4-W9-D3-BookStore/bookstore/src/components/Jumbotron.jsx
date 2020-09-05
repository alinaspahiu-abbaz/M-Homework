import React, {Component} from 'react';
import { Jumbotron, Container, Button } from "react-bootstrap";

const JumboTron = () => {
    return (
        <Jumbotron fluid>
  <Container>
    <h1>Welcome</h1>
    <p>
      This is the Best Bookstore you can ever find!
    </p>
      <p> Come visit us! </p>
    <p>
          <Button variant="primary">Learn more</Button>
        </p>
  </Container>
</Jumbotron>

    )
}

export default JumboTron;
