import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Stories from './Stories.jsx';
import Feed from './Feed.jsx';
import AppHeader from './AppHeader.jsx';


export default function App() {
    const [photos, setPhotos] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get('http://localhost:3000/photos');
            console.log(res.data)
            setPhotos(res.data);

            const result = await axios.get('http://localhost:3000/stories');
            setStories(result.data);
        }
        fetchData()
    }, []);

    return(
        <div>
            <AppHeader />
            <Stories stories={stories} />
            <Feed photos={photos} />
        </div>
    )
};