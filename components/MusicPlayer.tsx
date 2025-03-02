import { useEffect } from "react";
import * as Tone from "tone";

export default function MusicPlayer() {
    useEffect(() => {
        const player = new Tone.Player({
            url: "/music/space.mp3",
            loop: true,
            autostart: true,
        }).toDestination();

        return () => {
            player.stop();
            player.dispose();
        };
    }, []);

    return null;
}