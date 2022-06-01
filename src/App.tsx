import React, { useEffect, useState } from 'react';
import Videos from './Videos';
import fetchVideos from './services/fetchPictures';
import ReactHlsPlayer from 'react-hls-player';

import './App.css';

export interface Users {
  id: number;
  name: string;
  description: string;
  image: string;
  streamingURL: string;
  streamingType: string;
  drmType: string;
  drmLicenseServer: string;
  drmHeaders: string;
}

export default function App() {
  const [videos, setVideos] = useState<Array<Users>>([]);
  const [page] = useState<number>(1);

  useEffect(() => {
    
    const pics = async () => {
      const pics = await fetchVideos(page, 2);
      setVideos(pics);
    };

    pics();
  }, [page]);

  return (
    <>
      
    
      <div>
        <Videos videos={videos} />
      </div>

      <div>
        <ReactHlsPlayer
          className="ReactHlsPlayer"
          src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
          autoPlay={false}
          controls={true}
          poster="https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/400x600/https%3A%2F%2Fiptvimagecache-playplus-prod-vip.han.telia.se%2Foriginal%2Fse%2Fimage_storage%2Fgracenote%2F110%2F169%2Fp12162629_v_v8_aa.jpg"
          alt="video"
        />
      </div>
    </>
  );
}
