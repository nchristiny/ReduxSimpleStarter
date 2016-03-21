import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; is equivalent to:
  // instead of calling props above on line 3, the shorthand above is ES6,
  // {video} is identical to const video = props.video
  const imageURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};


export default VideoListItem;
