import React, { Component } from "react";

class Home extends Component {

    state = {
        products: []
    };
    fetchProducts = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/product/`, 
            {headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0"
            }
            });
            let data = await response.json();
            this.setState({products: data})
            console.log(data)
        }
        catch(e) {
            console.log(e)
        }
    }

    componentDidMount = () => {
        this.fetchProducts();
    }

    render() {
        console.log(this.props)
        return <div>
            {this.state.products.map(product => <span>{product.name}</span>)}
        </div>;
    }
}

export default Home;
