import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
`

const Title = styled.p`
  margin: auto;
`

export default function AppHeader(props) {

    return(
        <AppContainer>
          <Title>Momstagram</Title>
        </AppContainer>
    )
}