import React, { useState } from 'react';
import styled from 'styled-components';


const AvatarDiv = styled.div`
    width: 40px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    background-position: 50% 50%;
    background-size: cover;
`

export default function CardHeader(props) {

    return(
        <div>
          <AvatarDiv />
        </div>
    )
}