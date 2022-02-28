import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border-color: #E8E8E8;
border-bottom: 0.1rem solid #DCDEDD;
margin: 0;
padding: 0;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: inherit;
font-weight: inherit;
vertical-align: baseline;
line-height: 1.5;
color: #282828;
-webkit-font-smoothing: antialiased;

`;

const Border = styled.div`
border-top: 5px solid black;
padding-top: 4.8rem !important;
padding-bottom: 4.8rem !important;


@media (min-width: 795px){
    padding-left: 60px;
    padding-right: 60px;
}

max-width: 1366px;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
margin: 0;
border: 0;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: inherit;
font-weight: inherit;
vertical-align: baseline;
display: flex;
flex-direction: row;

@media (min-width: 600px){
    flex-basis: 100%;
}
`;

const Image = styled.img`
/* border: 1px solid black; */
display: flex;
width: 50%;
flex-direction: row;
margin-left: 5px;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}

`;

const Content = styled.div`
/* border: 1px solid black; */
display: flex;
margin-left: 24px;
flex-direction: row;
padding: 0;

@media (min-width: 600px){
    flex-basis: 50%;
}
`;

const Line = styled.div`
border-left: 7px solid green;
display: flex;
flex-direction: row;
border-color: #2F7463;
/* margin-left: 15px; */
padding: 0;
height: 160px;

@media (min-width: 600px){
    flex-basis: 50%;
} 

`;

const ContentData = styled.div`
/* border: 1px solid black; */
margin-left: 15px;
width: 80%;
font-family: "Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: inherit;
height: 160px;
color: #282828;
line-height: 1.2;
text-decoration: none;
a{
    text-decoration: none;
    color: #282828;
}
a:hover{
    color: #2F7463;
    text-decoration: underline;
}
`;


const Anchor = styled.div`
margin-top: 20px;
a{
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}

`;

const Module6 = () => {
  return (
    <Container>    
    <div >
    <Border>
        <Image
            src="https://ksr-static.imgix.net/Final_magic-and-div_hp-module-1225x525_R-311e886.jpg?ixlib=rb-4.0.2&s=d8fe051bc727dbf42c9bca0ccdbef4c1"
            alt=""
        />   
    <Content>  
        <div>
        <Line>
            <div>
            <ContentData>
                <div>
                <h1><a href="/">Magic & Divination</a></h1>
                <p>
                    From terrific tarot decks and wizarding wands to arcane accessories, 
                    eldritch electronics, sorcerous stationery, and so much more, you can
                    now find all the most spellbinding projects here in one place.
                </p>
                </div>
            </ContentData>
            </div>
        </Line>
        <Anchor>
        <div>
        <a href="/">Discover the magic</a>
        </div>
        </Anchor>
    </div>
    </Content>
    </Border>
    </div>
  </Container>
  )
}

export default Module6