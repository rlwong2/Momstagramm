import React from 'react';
import styled from 'styled-components';

import Card from './Card.jsx';
import AppHeader from './AppHeader.jsx';


const FeedDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
    top: 60px;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    z-index: 0.5;
    visibility: ${props => props.fullscreen ? "hidden" : "visible"};
`

export default function Feed(props) {
    const blurbs = [
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "001",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/01.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Chillin' together",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "002",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/02.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Who runs this house?",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "003",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/03.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/mel.jpeg",
            username: "Random Filipino Photographer Lady",
            caption: "Early kisses",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "004",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/04.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Seasoned travelers!!",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "005",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/05.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/mel.jpeg",
            username: "Mike & Ami",
            caption: "Good lookin'",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "006",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/06.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/mel.jpeg",
            username: "The Other Dada",
            caption: "Goofballs",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "007",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/07.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Kissy",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "008",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/08.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Smiley",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "0010",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/09.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "The Other Dada",
            caption: "You guys look alike",
        },
        {
            _id: "5eb76ef61123ce3f2ac89df0",
            id: "009",
            url: "https://momstagramm.s3.us-east-2.amazonaws.com/2F3160B9-E3E3-48BD-A4A6-CD072452F9FC_1_201_a.jpeg",
            avatar: "https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg",
            username: "Dada",
            caption: "Dada?",
        }
    ]

    return(
        <FeedDiv fullscreen={props.fullscreen}>
            <AppHeader />
          {blurbs.map((photo) => (
              
              <Card key={photo.id} photo={photo} />
          ))}
        </FeedDiv>
    )
}