import { Entity, Scene } from 'aframe-react';
import { useState } from 'react';
// import 'aframe';
import Head from 'next/head';
// import Image from 'next/image';

const CubeDemo = () => {
  const [color, setColor] = useState('red');

  const changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  return (
    <>
      <Head>
        <title>CubeDemo</title>
        {/* <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script> */}
      </Head>
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity
          text={{ value: 'Hello, A-Frame React!', align: 'center' }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <Entity
          id="box"
          geometry={{ primitive: 'box' }}
          material={{ color: color, opacity: 0.6 }}
          position={{ x: 0, y: 1, z: -3 }}
          events={{ click: changeColor }}
        >
          <Entity
            geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
            material={{ color: '#24CAFF' }}
          />
        </Entity>

        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" />
        </Entity>
      </Scene>
    </>
  );
};

export default CubeDemo;
