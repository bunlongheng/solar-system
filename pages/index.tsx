// pages/index.tsx
import SolarSystem from '../components/SolarSystem';
import MusicPlayer from '../components/MusicPlayer';
import UI from '../components/UI';

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <SolarSystem />
      <MusicPlayer />
      <UI />
    </div>
  );
}