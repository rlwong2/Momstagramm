import React, { useState } from 'react';
import CardHeader from './CardHeader.jsx';
import styled from 'styled-components';

const PhotoContainer = styled.div`
    width: 100vw;
    min-height: 300px;
    height: 100%;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
    margin: 0;
`

const Caption = styled.div`
    font-size: 14px;
    font-weight: 300;
`

export default function Card(props) {
    const style = {
        backgroundImage: "url(" + props.photo.url + ")"
    }

    return(
        <div>
            <CardHeader photo={props.photo} />
            <PhotoContainer style={style} />
            <Caption><b>{props.photo.username}</b> {props.photo.caption}</Caption>
        </div>
    )
}