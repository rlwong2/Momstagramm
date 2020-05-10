import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'react-image'


const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    width: 100vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-left: 10px;
    padding: 15px 0;
`

const AvatarDiv = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
    margin: 0 10px;
    border: 2px solid #ccc;
`

export default function CardHeader(props) {
    const AvatarImg = () => <Img src={props.photo.avatar} style={style} />

    const style = {
        width: '30px',
        height: '30px',
        borderRadius: '17px',
        border: '2px solid #ccc',
        marginRight: '8px'
    }

    return(
        <HeaderDiv>
          <AvatarImg style={style} />
          {props.photo.username}
        </HeaderDiv>
    )
}