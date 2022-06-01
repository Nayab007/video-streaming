import React from 'react';
import { Users } from './App';
import './App.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

interface VideoProps {
  videos: Array<Users>;
}

export default function Pictures(props: VideoProps) {
  const { videos } = props;

  // here we are mapping the list that comes from the props
  return (
    <div>
      {videos.map((user) => {
        return (
          <div className="grid-container" key={user.id}>
            <div className="title">
              <h4>{user.id}</h4>
              <h5>{user.name}</h5>
              <h5>{user.description}</h5>
            </div>
            {/* Video data Links From API endpoint */}
            <div>
              <ShakaPlayer
                className="videoPlayer"
                autoPlay="false"
                src={user.streamingURL}
                poster={user.image}
                streamingtype={user.streamingType}
                drmtype={user.drmType}
                drmlicenseserver={user.drmLicenseServer}
                drmheaders={user.drmHeaders}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
