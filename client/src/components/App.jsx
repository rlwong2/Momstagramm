import React, { useState } from 'react';
import axios from 'axios';
import Stories from './Stories.jsx';
import Feed from './Feed.jsx';

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(async () => {
        const res = await axios.get('http://localhost:3000/photos');
        setPhotos(res.data);
    });

    return(
        <div>
            <Stories stories={stories} />
            <Feed photos={photos} />
        </div>
    )
};