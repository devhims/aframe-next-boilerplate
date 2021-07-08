import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// import 'babel-polyfill';
// import { Entity, Scene } from 'aframe-react';
// import { useState } from 'react';
import dynamic from "next/dynamic";

const CubeDemo = dynamic(
  () => {
    return import("../components/CubeDemo");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{width: "100%", height: "100%"}}>
<CubeDemo/>
    </div>
  )
}
