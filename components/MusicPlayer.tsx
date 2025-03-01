// components/MusicPlayer.tsx
import { useEffect } from 'react';
import * as Tone from 'tone';

export default function MusicPlayer() {
  useEffect(() => {
    const player = new Tone.Player({
      url: '/music/space.mp3', // Path to your background music file
      loop: true,
      autostart: true,
    }).toDestination();

    // Start the audio context on user interaction (required by browsers)
    const startAudio = async () => {
      await Tone.start();
      console.log('Audio context started');
    };

    startAudio();

    return () => player.dispose(); // Clean up on unmount
  }, []);

  return null;
}