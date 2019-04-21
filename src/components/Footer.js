import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';

const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
				vertical
			>
				<Container textAlign='center'>
					<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
					<List horizontal inverted divided link>
						<List.Item as='a' href='#'>Homepage</List.Item>
						<List.Item as='a' href='#'>Movies</List.Item>
					</List>
				</Container>
			</Segment>
		</div>
	);
};

export default Footer;