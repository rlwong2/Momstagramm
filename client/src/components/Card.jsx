import React, { useState } from 'react';
import CardHeader from './CardHeader.jsx';
import styled from 'styled-components';
import Img from 'react-image'

const CardDiv = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
`


const Caption = styled.div`
    font-size: 14px;
    font-weight: 300;
    min-height: 60px;
    margin: 10px;
`

const PhotoDiv = styled.div`
    width: 396px;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
    margin: 0 auto;
`

export default function Card(props) {
    const style = {
        width: '100%',
        borderRadius: '10px',
    }

    const PhotoImg = () => <Img src={props.photo.url} style={style} />

    return(
        <div>
            <CardHeader photo={props.photo} />
            <PhotoDiv>
                <PhotoImg />
            </PhotoDiv>
            <Caption><b>{props.photo.username}</b> {props.photo.caption}</Caption>
        </div>
    )
}