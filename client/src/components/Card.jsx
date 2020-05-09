import React, { useState } from 'react';
import CardHeader from './CardHeader.jsx';
import styled from 'styled-components';

const PhotoContainer = styled.div`
    width: 100vw;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
`

export default function Card(props) {
    const style = {
        backgroundImage: "url(" + props.photo.url + ")"
    }

    return(
        <div>
            <CardHeader avatar={props.photo.avatar} />
            <PhotoContainer photo={props.photo.url} style={style} />
        </div>
    )
}