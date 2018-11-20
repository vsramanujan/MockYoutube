import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // Since it does not record any user interaction and does not render itself in any fashion it could be a functional component
    //No need this.props because this isn't a class based component 
    //NOTE: STAY AWAY FROM FOR LOOPS IN JS AS MUCH AS POSSIBLE

    const videoItems = props.videos.map( (video) => <VideoListItem video = {video} key = {video.etag} onVideoSelect ={props.onVideoSelect}  />) // So now there is no key for each of the things and thats a Warning because each time someone wants to update something it recreates the entire thing so add a key tag 
    return(
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul> 
    ); 
}

export default VideoList;