import React from 'react'
import { Card, GridColumn } from 'semantic-ui-react'
// Card Css Fixed
const MovieCard = ({ movie }) => (
    <GridColumn>
        <Card image={movie.cover}
              header={movie.title}/>
    </GridColumn>

);

export default MovieCard;