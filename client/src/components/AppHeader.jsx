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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc; 
  background-color: #fff;
  z-index: 1;
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