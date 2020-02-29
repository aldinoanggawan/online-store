import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import Slideshow from '../components/Slideshow'
import CardLayout from '../components/CardLayout'


const HomePage = () => {
    const Div = styled.div`
    `

    const containerStyle = {
        padding: '50px',
        paddingTop: '50px'
    }

    return (
        <Div>
            <Slideshow/>
            <Container className="container-item" fluid={true} style={containerStyle}>
                <Row xs="2" sm="2" md="3" lg="3">
                    <Col><CardLayout /></Col>
                    <Col><CardLayout /></Col>
                    <Col><CardLayout /></Col>
                    <Col><CardLayout /></Col>
                    <Col><CardLayout /></Col>
                    <Col><CardLayout /></Col>
                </Row>
            </Container>
        </Div>
    )
}

export default HomePage