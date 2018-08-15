// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Landing = () => (
	<Wrapper to={`/`}>
		<div className="landing">
			<h1> F L I X </h1>
			<Link to="/search">Browse All</Link>
		</div>
	</Wrapper>
);

export default Landing;
