import { useEffect, useState } from "react";
import { Button } from "./components/btn.component";
import "./home.css";
import { rooms } from "./context/data";
import { Background } from "./components/bg";
import { Room1 } from "./components/room1";
import { Result } from "./components/result";
import music from "./assets/music.mp3";
import lock from "./assets/zincir3.gif";

export const App = () => {
  const [glitch, setGlitch] = useState(false);
  const [room, setRoom] = useState(null);
  const [result, setResult] = useState(null);
  const [audio] = useState(new Audio(music));

  const playMusic = () => {
    if (audio.currentTime > 0) {
      audio.currentTime = 0;
    }
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
  };
  const stopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    let glitchTimeout;

    const triggerGlitch = () => {
      setGlitch(true);
      glitchTimeout = setTimeout(() => setGlitch(false), 180);
    };

    const scheduleNextGlitch = () => {
      const nextDelay = Math.floor(Math.random() * 10000) + 6000;
      setTimeout(() => {
        triggerGlitch();
        scheduleNextGlitch();
      }, nextDelay);
    };

    scheduleNextGlitch();

    return () => {
      clearTimeout(glitchTimeout);
    };
  }, []);

  const finish = (result) => {
    if (result === "cancel") {
      setRoom(null);
      setResult(null);
      stopMusic();
      return;
    }
    setRoom(null);
    setResult(result);
  };

  return (
    <div className={`glitch-wrapper ${glitch ? "glitch-real" : ""}`}>
      {room ? (
        <Room1 room={room} action={finish} />
      ) : result ? (
        <>
          <Background />
          <Result result={result} action={finish} />
        </>
      ) : (
        <>
          <div className="labyrinth">
            <h1 className="title">THE LABYRINTH OF THE MIND</h1>
            <p className="subtitle">CHOOSE A ROOM</p>
            <div className="rooms">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className={`room ${room.id}`}
                  style={{ backgroundImage: `url(${room.cover})` }}
                  onClick={() => {
                    if (room.id === "fear") {
                      setRoom(room);
                      playMusic();
                    } else {
                      alert("This room is not available yet.");
                    }
                  }}
                >
                  <div className="room-overlay">
                    <div className="room-text">
                      <h2>{room.title}</h2>
                      <p>{room.subtitle}</p>
                    </div>
                  </div>
                  {!room.avaible && (
                    <img
                      src={lock}
                      alt="lock"
                      className="lock"
                    />
                  )}
                </div>
              ))}
            </div>
            <Button text={"FOLLOW  X"} />
          </div>
          <Background />
        </>
      )}
    </div>
  );
};
