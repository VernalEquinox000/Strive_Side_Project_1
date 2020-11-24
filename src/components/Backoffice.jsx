import React, { Component } from "react";
import {Form, Button} from "react-bootstrap";

class Backoffice extends Component {
    state = {
        product: {
            name: '',
            description: '',
            price: 0,
            imageURL: '' 
        }
    }
    onChangeHa
    submitData = async () => {
        try {
            await fetch (`https://striveschool-api.herokuapp.com/api/product/`,
            {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0'
                },
            body: JSON.stringify(this.value.state)   
            });

        }
        catch(e) {
            
        }
    }
    render() {
        return (
        <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value ={this.state.product.name} placeholder="Name" required onChange={(e) => this.setState({ product: { ...this.state.product, name: e.target.value } })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value ={this.state.product.description} placeholder="Description" required onChange={(e) => this.setState({ product: { ...this.state.product, description: e.target.value } })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" value ={this.state.product.brand} placeholder="Brand" required onChange={(e) => this.setState({ product: { ...this.state.product, brand: e.target.value } })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value ={this.state.product.price} placeholder="Price" required onChange={(e) => this.setState({ product: { ...this.state.product, price: e.target.value } })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>ImageURL</Form.Label>
              <Form.Control type="url" value ={this.state.product.imageURL} placeholder="ImageURL" required onChange={(e) => this.setState({ product: { ...this.state.product, ImageURL: e.target.value } })} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
        )
    }
}

export default Backoffice;
