import React, { Component } from 'react';
import styled from 'styled-components'

const Section = styled.button`
font-size: 4em;
background-color : ${props => props.color};
border-radius:8px;
display:flex;
color:#ffffff;
text-decoration:none;
padding:19px 32px;
text-shadow:0px 1px 0px #3d768a;
margin: 70
`;

class Button extends Component {
    render() {
        return (
            <Section onClick={this.props.onClick} color={this.props.color}> {this.props.children} </Section>
        );
    }
}

export default Button;