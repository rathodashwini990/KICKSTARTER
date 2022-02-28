import React from 'react'
import styled from 'styled-components'; 

const Container = styled.div`
border: 1px solid white;
width: 100%;
height: 1200px;
`
const Image = styled.img`
border: 1px solid white;
/* border-top: 1px solid grey; */
width: 100%;
height: 600px;

`
const Image1 = styled.img`
/* border-bottom: 1px solid grey; */
border: 1px solid white;
width: 100%;
height: 600px;

`


const GridImage1 = () => {
  return (
    <Container>
        <Image src={require('../Images/creative1.png')} 
        alt=""
        />
        <Image1 src={require('../Images/corner.png')} 
        alt=""
        />
    </Container>
  )
}

export default GridImage1