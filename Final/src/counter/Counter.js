import React, { Component } from 'react';
import Button from "./Button";
import styled from 'styled-components'


const Cube = styled.p`
font-size: 4em;
`;

const BgSection = styled.div`
 margin : 100px ;
 background-color : LightGrey ;
 padding : 50px ;
`;



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
                
                    <BgSection>
                        <center>
                        <Button onClick={this.countUp} color="DeepSkyBlue" style = {{margin : 50}}>Count Up</Button>
                        <Cube>Count : {this.state.count}</Cube>
                        <Button onClick={this.countDown} color="tomato" style = {{margin : 50}}>Count Down</Button>
                        </center>
                    </BgSection>
                   
                
            </>


        );
    }
}

export default Counter;


