import React, { useState } from 'react';
import styled from 'styled-components';
import InstaStories from 'react-insta-stories';

const StoriesDiv = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(17, 17, 17);
    margin: 0;

`

export default function Stories(props) {

    return(
        <StoriesDiv>
            <InstaStories
                    stories={stories}
                    defaultInterval={5000}
                    width={414}
                    height={896}
                    isPaused={true}
                    onAllStoriesEnd={props.toggleFullscreen}
            />
        </StoriesDiv>
    )
}

const stories = [
    {
        url: 'https://momstagramm.s3.us-east-2.amazonaws.com/stories/001.jpeg',
        seeMore: ({ close }) => (
            <div style={{ width: '100%', height: '100%' }}>Hello</div>
        ),
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 5h ago',
            profileImage: 'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/002.jpeg',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 32m ago',
            profileImage: 'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/003.jpeg',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    },
    {
        url: 'https://momstagramm.s3.us-east-2.amazonaws.com/stories/004.mov',
        type: 'video',
        duration: 16000
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/005.jpeg',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/006.mov',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        },
        type: 'video',
        seeMore: ({ close }) => (
            <div style={{ width: '100%', height: '100%' }}>Hello</div>
        )
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/007.jpeg',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 55m ago',
            profileImage:
                'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    },
    {
        url:
            'https://momstagramm.s3.us-east-2.amazonaws.com/stories/008.jpeg',
        header: {
            heading: 'Corey & Dada',
            subheading: 'Posted 55m ago',
            profileImage:
                'https://momstagramm.s3.us-east-2.amazonaws.com/IMG_0496+(3).jpg'
        }
    }
];