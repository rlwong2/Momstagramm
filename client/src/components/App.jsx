import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import StoriesHeader from './StoriesHeader.jsx';
import Stories from './Stories.jsx';
import Feed from './Feed.jsx';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 auto;
    position: absolute;
    top: 0;
    bottom: 0;
`

const FullscreenHide = styled.div`
    visibility: ${props => props.fullscreen ? "visible" : "hidden"};
    z-index: ${props => props.fullscreen ? "2000" : "0"};
    height: 896px;
    width: 414px;
    margin: 0;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
`

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [stories, setStories] = useState([]);
    const [fullscreen, setFullscreen] = useState(false);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await axios.get('http://localhost:3000/photos');
    //         console.log(res.data)
    //         setPhotos(res.data);

    //         // const result = await axios.get('http://localhost:3000/stories');
    //         // setStories(result.data);
    //     }
    //     fetchData()
    // }, []);

    const toggleFullscreen = (e) => {
        console.log('triggered')
        setFullscreen(!fullscreen)
    }

    return(
        <AppContainer>
            <FullscreenHide fullscreen={fullscreen} >
                <Stories toggleFullscreen={toggleFullscreen} />
            </FullscreenHide>
            <StoriesHeader photos={photos} stories={stories} toggleFullscreen={toggleFullscreen} fullscreen={fullscreen} />
            <Feed photos={photos} fullscreen={fullscreen} />
        </AppContainer>
    )
};