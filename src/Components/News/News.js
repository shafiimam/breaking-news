import React from "react";
import { Button, Card } from "react-bootstrap";
const News = (props) => {
  const {title,description,publishedAt} = props.article;
  return (
    <Card className="mx-3 my-4">
      <Card.Header>{props.article.source.name}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="info">Read More</Button>
      </Card.Body>
      <Card.Footer>Published at: {publishedAt}</Card.Footer>
    </Card>
  );
};

export default News;
