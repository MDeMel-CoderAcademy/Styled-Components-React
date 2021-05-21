import React, { Component } from 'react';
import Button from "./Button";

class Counter extends Component {
    state = {
        count: 0
    }

    countUp = () => {
        const newCount = (this.state.count + 1)
        this.setState({ count: newCount })
    }

    countDown = () => {
        if (this.state.count > 0) {
            const newCount = (this.state.count - 1)
            this.setState({ count: newCount })
        }

    }
    render() {
        return (
            <>
                <Button onClick={this.countDown}>Count Down</Button>
                <p>Count : {this.state.count}</p>
                <Button onClick={this.countUp}>Count Up</Button>
            </>



        );
    }
}

export default Counter;

