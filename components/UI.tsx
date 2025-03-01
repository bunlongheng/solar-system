// components/UI.tsx
import { useState } from 'react';
import * as Tone from 'tone';

export default function UI() {
  const [audioStarted, setAudioStarted] = useState(false);

  const startAudio = async () => {
    await Tone.start();
    setAudioStarted(true);
    console.log('Audio context started');
  };

  return (
    <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
      <h1>Solar System Explorer</h1>
      {!audioStarted && (
        <button onClick={startAudio}>Start Audio</button>
      )}
    </div>
  );
}