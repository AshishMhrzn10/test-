import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';

import './App.css';

const App = () => {

    return (
        <>
            <Canvas className='canvas' camera={{ position: [-5, 2, 10], fov: 60 }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Box />
            </Canvas>
        </>
    );
};

export default App;