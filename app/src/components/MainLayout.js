import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import VideoContainer from './VideoContainer'
import ShoppingCart from './ShoppingCart'

export default class MainLayout extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col><VideoContainer></VideoContainer></Col>
                <Col><ShoppingCart></ShoppingCart></Col>
                </Row>
            </Container>
        )
    }
}
