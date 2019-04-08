import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = ({ movie }) => (
    <Card>
        <Image src={movie.cover} />
        <Card.Content>
            <Card.Header>
                {movie.title}
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Mart 2019
        </span>
            </Card.Meta>
            <Card.Description>
                Turkish'i Dondurma, Çanakkale Savaşı sırasında Avustralya'da yaşayan iki Türk'ün ülkeleri için verdikleri mücadeleyi konu ediyor.
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                9/10 Puan
            </a>
        </Card.Content>
    </Card>
);

export default MovieCard;