import { useEffect, useRef } from 'react';

// Plays subtle ambient space sounds after user interaction
export default function Ambience({ active }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (active) {
      // Attempt to play when user started the journey
      const play = async () => {
        try {
          await audio.play();
        } catch (_) {
          // ignore autoplay restrictions; will play on next gesture
        }
      };
      play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [active]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      // Low-volume, subtle ambiance
      volume={0.15}
      src="https://cdn.pixabay.com/download/audio/2021/09/16/audio_5c13a9dfd6.mp3?filename=ambient-space-109277.mp3"
      className="hidden"
    />
  );
}
