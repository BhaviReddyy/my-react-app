import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Video Player using useRef</h2>

      <video
        ref={videoRef}
        width="500"
        controls={false}
        style={{ border: "2px solid black", marginBottom: "20px" }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <div>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause} style={{ marginLeft: "10px" }}>
          ⏸ Pause
        </button>
        <button onClick={handleRewind} style={{ marginLeft: "10px" }}>
          ⏪ Rewind 5s
        </button>
        <button onClick={handleForward} style={{ marginLeft: "10px" }}>
          ⏩ Forward 5s
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
