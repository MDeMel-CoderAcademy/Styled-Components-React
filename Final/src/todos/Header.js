import React from "react"
import styled from 'styled-components'

const HeadSection = styled.h1`
        fontSize: 2rem ;
        fontWeight: 600 ;
        marginBottom: 2rem ;
        lineHeight: 1em ;
        color: #ececec ;
        textTransform: lowercase;
        textAlign: center;
        padding: 20px ;
        lineHeight: 1.5em ;
`;
const Header = () => {

    return(
    <center><HeadSection>
      todos </HeadSection></center> )

}

export default Header