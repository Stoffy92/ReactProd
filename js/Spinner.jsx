// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
	height: 5rem;
	align-items: center;
	justify-content: ceneter;
	animation: ${spin} 4s infinite linear;
	background-image: url(/public/img/loading.png);
	display: none; //Bandaid fix for now
`;

const Spinner = () => <Image src="/public/img/loading.png" alt="loading indicator" />;

export default Spinner;
