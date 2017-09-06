import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <CardEl>
    <Brand color={props.agency.brandingColors.primary}>
      <Image src={props.agency.logo} />
    </Brand>
    <Image src={props.image} className="house-image" />
    <h2>{Card}</h2>
    <p>{props.price}</p>
  </CardEl>
)

const CardEl = styled.div`
  width: 100%;
  padding: 25px;
  border: 1px solid gray;
  display: block;
`;

const Brand = styled.div`
  display: block;
  background-color: ${props => props.color};
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export default Card;
