import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // THIS IS THE SAME AS DOING props as argument and doing const video = props.video in the next line 
    console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url;
    return( 
    <li onClick = {() => onVideoSelect(video)} className = 'list-group-item'> 
        <div className = 'video-list media'>
            <div className = 'media-left'>
                <img className = 'media-object' src={imageUrl} />
            </div>

            <div className = 'media-body'>
                <div className = 'media-heading'> {video.snippet.title}</div>
            </div>
        </div>
    </li>
    )
}

export default VideoListItem;