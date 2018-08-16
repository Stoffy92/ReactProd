// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
	state = {
		apiData: { rating: '' }
	};
	componentDidMount() {
		axios.get(`s${this.props.show.imdbID}`).then((response: { data: { rating: string } }) => {
			this.setState({ apiData: response.data });
		});
	}
	props: {
		show: Show
	};
	render() {
		const { title, description, year, poster, trailer } = this.props.show;
		let ratingComponent;
		if (this.state.apiData.rating) {
			ratingComponent = <h3>{this.state.apiData.rating}</h3>;
		} else {
			ratingComponent = <Spinner />;
		}
		return (
			<div className="details">
				<Header />
				<section className="details-section">
					<h1 className="details-title">{title}</h1>
					<h2 className="details-year">{year}</h2>
					<h3 className="details-rating">{ratingComponent}</h3>
					<div className="details-text-box">
						<img className="details-img" src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
						<p className="details-description">{description}</p>
					</div>
				</section>
				<div className="div-trailer">
					<iframe
						className="details-trailer"
						src={`https://www.youtube-nocookie.com/embed/${trailer}
				?rel=0&amp;controls=0&amp;showinfo=0`}
						frameBorder="0"
						allowFullscreen
						title={`Trailer for ${title}`}
					/>
				</div>
			</div>
		);
	}
}
export default Details;
