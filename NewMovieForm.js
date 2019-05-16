import React, {Component} from 'react';
import { Button, Form, Segment, Image } from 'semantic-ui-react'

class NewMovieForm extends Component {
    state = {
        title: '',
        cover: '',
        error: {}
    };
    handelChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        });
    };

    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = "Cant be blank";
        if (!this.state.cover) errors.title = "Cant be blank";
        return errors;
    };
    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <Segment inverted style={{backgroundColor: '#35BDB2'}
                }>
                    <Form inverted>
                        <Form.Group widths='equal' onSubmit={this.onSubmit}>
                            <Form.Input id="title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handelChange}
                                        fluid label='Title'
                                        placeholder='Title'
                            />
                            <Form.Input id="cover"
                                        name="cover"
                                        value={this.state.cover}
                                        onChange={this.handelChange}
                                        fluid label='Cover Url'
                                        placeholder='Cover Url' />
                        </Form.Group>
                        <Image className="coverimage" src={this.state.cover} size='small' />
                        <div className="clearfix"></div>
                        <Button primary type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}


export default NewMovieForm;