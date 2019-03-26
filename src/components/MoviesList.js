import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const moviesList = (
		<div>
			{
				movies.error.response
					? <h3>Error retrieving data!</h3>
					: movies.movies.map( movie => <div key={movie._id}>{movie.title}</div>
					)
			}
		</div>
	);

	return (
		<div>
			{ movies.length === 0 ? emptyMessage : moviesList }
		</div>
	);
};

MoviesList.propTypes = {
	movies: PropTypes.shape({
		movies: PropTypes.array.isRequired
	}).isRequired
};

export default MoviesList;