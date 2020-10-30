import React, { Component } from 'react';
import { BodyContainer, Image } from './ProjectDescription.styles';

class ProjectDescription extends Component {
    render() {
        return (
            <div>
                <BodyContainer>
                    <h3><strong>{this.props.bold}</strong>{this.props.light}</h3>
                    <p>{this.props.body}</p>
                </BodyContainer>
                <Image src={this.props.image} />
            </div>
        );
    }
}

export default ProjectDescription;