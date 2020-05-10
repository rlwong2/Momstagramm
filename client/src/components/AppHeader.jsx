import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  position: fixed;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc; 
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