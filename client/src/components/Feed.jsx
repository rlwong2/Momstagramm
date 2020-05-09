import React, { useState } from 'react';

import Card from './Card.jsx';

export default function Feed(props) {

    return(
        <div>
          {props.photos.map((photo) => (
              
              <Card key={photo.id} photo={photo} />
          ))}
        </div>
    )
}