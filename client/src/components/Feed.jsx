import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Card.jsx';

const FeedDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
`

export default function Feed(props) {

    return(
        <FeedDiv>
          {props.photos.map((photo) => (
              
              <Card key={photo.id} photo={photo} />
          ))}
        </FeedDiv>
    )
}