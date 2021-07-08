import { Entity, Scene } from 'aframe-react';
import { useEffect, useState } from 'react';
import Head from 'next/head';
// import Script from 'next/script';
import 'aframe';

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
            color: #AD50FF; 
            src: https://cdn.8thwall.com/web/assets/cube-texture.png"
          />

          <Entity
            primitive="a-plane"
            height="2000"
            width="2000"
            rotation="-90 0 0"
            material="opacity: 0.67"
          />
        </Scene>
      )}
    </>
  );
};

export default BlankAframe;
