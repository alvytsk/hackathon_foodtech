import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap'

export default class ShoppingCart extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        setInterval(() => {
            fetch('http://localhost:3000/json/test.json')
			.then(response => response.json())
			.then(data => {
                console.log(data);
				this.setState({data: data })
		    })
			.catch(err => console.error(this.props.url, err.toString()))
        }, 1500);
    }
    render() {
        let totalPrice = 0;
        this.state.data.map(product => (
            totalPrice += product.amount * product.price
        ));

        return (
            <div>
                <p></p>
                
                <Row>
                    {this.state.data.map(product => (
                        
                        <Col sm="12" md={{ size: 4, offset: 4 }} key={product.id}>
                        <div className="text-center">
                            <Card body>
                                <CardTitle><h3>{product.title} x {product.amount}</h3></CardTitle>
                                <CardText>Price: {product.price}</CardText>
                            </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
                <p/>
                <Row>
                    <Col>
                        <div className="text-center"><h3>Total price: {totalPrice}</h3></div>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <div className="text-center"><Button color="success">Go to payment</Button></div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
