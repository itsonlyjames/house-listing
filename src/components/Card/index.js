import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <CardEl>
    <Brand color={props.agency.brandingColors.primary}>
      <Logo src={props.agency.logo} />
    </Brand>
    <ImageWrapper>
      <Image src={props.image} className="house-image" />
      <Button onClick={props.onClick}>{props.saved ? 'Remove property' : 'Save property'}</Button>
    </ImageWrapper>
    <h2>{Card}</h2>
    <Price>{props.price}</Price>
  </CardEl>
)

const Button = styled.button`
  display: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, .8);
  color: white;
  cursor: pointer;
  border: 0;
  padding: 10px 0;
  font-size: 20px;
`;

const CardEl = styled.div`
  width: 100%;
  border: 1px solid gray;
  display: block;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin-bottom: 25px;

  &:hover ${Button} {
    display: block;
  }
`;

const Brand = styled.div`
  display: block;
  background-color: ${props => props.color};
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Logo = Image.extend`
  padding: 40px;
`;

const Price = styled.p`
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export default Card;
