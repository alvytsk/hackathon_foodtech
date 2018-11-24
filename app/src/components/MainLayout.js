import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import VideoContainer from './VideoContainer'
import ShoppingCart from './ShoppingCart'

export default class MainLayout extends Component {
    render() {
        return (
            <div className="mainlayout">
            <Container>
                <div className="text-center">
                    <VideoContainer></VideoContainer>
                    <ShoppingCart></ShoppingCart>
                </div>
            </Container>
            </div>
        )
    }
}
