import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import styled from 'styled-components'

const CardLayout = (props) => {
    const Div = styled.div`
        .title{
            position: relative;
            text-align: center;
            font-size: 16px;
            color: #4B4444;
            padding-top: 8px;
            margin-bottom: 5px;
        }
        .subtitle{
            text-align: center;
            font-size: 12px;
            font-style: italic;
            color: #665c5c;
            margin-bottom: 5px;
        }
    `

    const cardStyle = {
        borderStyle: 'none',
        paddingBottom: '30px'

    }

    return (
        <Div>
        <Card style={cardStyle}>
            <CardImg top width="100%" src="/assets/product1.jpeg" alt="Card image cap" />
            {/* <CardBody> */}
            <CardTitle className="title">Just Hold On Blush Maxi</CardTitle>
            <CardSubtitle className="subtitle">RM 123</CardSubtitle>
            {/* </CardBody> */}
        </Card>
        </Div>
    );
};

export default CardLayout;