import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} style={{margin:20}}>{this.props.children}</button>
        );
    }
}

export default Button;
