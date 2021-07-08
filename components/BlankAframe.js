import { Entity, Scene } from 'aframe-react';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const BlankAframe = () => {
  const [xrReady, setXrReady] = useState(false);
  useEffect(() => {
    const watchWindow = setInterval(() => {
      if (window.XR8 && window.AFRAME && window.XRExtras) {
        console.log('XR8 ready watcher');
        setXrReady(true);
        clearInterval(watchWindow);
      } else {
        console.log('loading watcher');
      }
    }, 100);
  }, []);
  return (
    <>
      <Head>
        <title>Blank Aframe</title>
        <script src="//cdn.8thwall.com/web/aframe/8frame-1.1.0.min.js"></script>

        <script src="//cdn.8thwall.com/web/xrextras/xrextras.js"></script>

        <script
          async
          src="//apps.8thwall.com/xrweb?appKey=mSofXbWTdanwMZsJkSv5HKia091PsOzQa2IIMudbjs7FW5uMBkUGD2gQfVKSnyISXunV1Q"
        ></script>
      </Head>
      {xrReady && (
        <Scene
          xrextras-tap-recenter
          xrextras-almost-there
          xrextras-loading=""
          xrextras-runtime-error
          xrextras-gesture-detector
          xrweb
        >
          <Entity
            primitive="a-light"
            light="
      type: directional; 
      castShadow: true; 
      color: white; 
      intensity: 0.5"
            position="5 10 7"
          />

          <Entity primitive="a-camera" position="0 2 2" />

          <Entity
            primitive="a-box"
            xrextras-one-finger-rotate
            position="0 0.5 0"
            material="
            color: #AD50FF; shader: flat; 
            src: https://cdn.8thwall.com/web/assets/cube-texture.png"
            shadow
          />

          <Entity
            primitive="a-plane"
            height="2000"
            width="2000"
            rotation="-90 0 0"
            material="shader: shadow; opacity: 0.67"
            shadow
          />
        </Scene>
      )}
    </>
  );
};

export default BlankAframe;
