// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
	width: 32%;
	border: 1px solid #333333;
	border-radius: 4px;
	margin-top: 5%;
	margin-bottom: 1%;

	overflow: hidden;
	color: black;
	text-decoration: none;
	-webkit-box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.27);
	box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.27);
	-moz-box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.27);
	&:hover {
		transform: scale(1.03);
		-webkit-box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.52);
		box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.52);
		-moz-box-shadow: 5px 5px 15px 4px rgba(0, 0, 0, 0.52);
		transition: transform 0.4s;
	}
	@media (max-width: 768px) {
	}

	@media (max-width: 768px) {
		width: 95%;
	}

	@media only screen and (min-width: 768px) {
	}

	@media only screen and (min-width: 992px) {
	}

	@media only screen and (min-width: 1200px) {
	}
`;

const Image = styled.img`
	width: 46%;
	float: left;
	margin-right: 10px;

	@media (max-width: 768px) {
		width: 100%;
		height: 50%;
		align-items: center;
		float: none;
		display: block;
	}
`;

const ShowCard = (props: { poster: string, title: string, year: string, description: string, imdbID: string }) => (
	<Wrapper to={`/details/${props.imdbID}`}>
		<Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
		<div>
			<h3 className="props-title">{props.title}</h3>
			<h4 className="props-year">({props.year})</h4>
			<p className="props-description">{props.description}</p>
		</div>
	</Wrapper>
);

export default ShowCard;
