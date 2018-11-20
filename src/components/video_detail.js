import React from 'react';

const VideoDetail = ({video}) =>{

    if(!video){
        return <div> Lodaing... </div>;
    }
    // In Youtube when you navigate from one video to the other, what changes is basically only the id
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //Only in ES6 same as 'https...' + videoId ;   

    return(
        <div className = "video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className = "embed-responsive-item" src = {url}></iframe>
            </div>

            <div className='details'>
                <div>
                        {video.snippet.title}
                </div>
                <div>
                        {video.snippet.description}
                </div>
            
            </div>
        </div>
    )
}

export default VideoDetail;