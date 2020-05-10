import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Stories from './Stories.jsx';
import Feed from './Feed.jsx';
import AppHeader from './AppHeader.jsx';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:3000/photos');
            console.log(res.data)
            setPhotos(res.data);

            // const result = await axios.get('http://localhost:3000/stories');
            // setStories(result.data);
        }
        fetchData()
    }, []);

    return(
        <AppContainer>
            <AppHeader />
            <Stories stories={stories} />
            <Feed photos={photos} />
        </AppContainer>
    )
};