import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Backoffice extends Component {
  state = {
    product: {},
    loading: true,
  };

  onChangeHandler = (e) => {
    console.log(e.target);
    this.setState({
      product: {
        ...this.state.product,
        [e.target.id]: e.target.value,
      },
    });
  };
  submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/product/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.product),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0",
          },
        }
      );
      if (response.ok) {
        this.setState({ loading: false });
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.product.name}
              id="name"
              placeholder="Name.."
              required
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description.."
              required
              id={"description"}
              value={this.state.description}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand.."
              required
              value={this.state.brand}
              id={"brand"}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price.."
              required
              value={this.state.price}
              id={"price"}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ImageUrl</Form.Label>
            <Form.Control
              type="url"
              placeholder="Product image url here.."
              required
              value={this.state.imageUrl}
              id={"imageUrl"}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Form.Group>

          <Button variant="danger" type="submit" onClick={this.submitData}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Backoffice;
