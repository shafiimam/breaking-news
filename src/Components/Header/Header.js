import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Jumbotron className="my-3 mx-1">
        <h1>React Bootstrap</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
