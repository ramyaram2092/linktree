// import logo from './logo.svg';
import './App.css';
import Card from  './components/card/Card.js';
// import ParticleBackground from 'react-particle-backgrounds'
// import ParticlesConfig from './config/ParticlesConfig';

import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

// import HorizontalScroll from  './components/scroll/HorizontalScroll.js';


function App() {
  const data = [
    { title: "Resume", description: "https://www.linkedin.com/in/ramya-ramasamy-b4357078/overlay/1635549417217/single-media-viewer/?profileId=ACoAABB0-WMBprnpC_xP4fsXAdR2W9TB1cQHdw0" },
    { title: "My Journey", description: "https://www.youtube.com/watch?v=xbDW_cBJ-wE&ab_channel=RamyaRamasamy" },
    { title: "LinkedIn", description: "https://www.linkedin.com/in/ramya-ramasamy-b4357078/" },
    { title: "GitHub", description: "https://github.com/ramyaram2092" },
    { title: "Problem Solving", description: "https://leetcode.com/ramyaramasamy2092/" },
    // { title: "Resume", description: "This is the third card" },
  ];
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "0f0f0f",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />   
    {/* <div className="top-section">
        <h1> Ramya Ramasamy </h1>
    </div> */}
   <div className="app-container">
      <div className="profile">
      <h1>Profile Dump</h1> {/* Add the heading here */}

      <div className="card-list">
      {data.map((item, index) => (
        <Card key={index} title={item.title} url={item.description} />
      ))}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
