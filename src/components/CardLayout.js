import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import styled from 'styled-components'

const CardLayout = (props) => {
    const Div = styled.div`
        .title{
            text-align: center;
            font-size: 25px;
        }
        .subtitle{
            text-align: center;
        }
    `

    return (
        <Div>
        <Card>
            <CardImg top width="100%" src="/assets/product1.jpeg" alt="Card image cap" />
            <CardBody>
            <CardTitle className="title">Just Hold On Blush Maxi</CardTitle>
            <CardSubtitle className="subtitle">RM 123</CardSubtitle>
            <br></br>
            <Button>Add to Cart</Button>
            </CardBody>
        </Card>
        </Div>
    );
};

export default CardLayout;