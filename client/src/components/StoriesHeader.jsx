import React, { useState } from 'react';
import styled from 'styled-components';

const StoriesHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  position: relative;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc; 
  background-color: #fff;
  z-index: 1.1;
`

const StoryAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
    background-image: url("https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg");
    margin: 0 10px;
    border: 3px solid #FF1493;
`

export default function StoriesHeader(props) {
    const style = {
        marginLeft: '15px'
    }

    return(
        <StoriesHeaderDiv>
            <StoryAvatar onClick={props.toggleFullscreen} style={style} />
        </StoriesHeaderDiv>
    )
}