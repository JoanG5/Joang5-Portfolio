import React, { useEffect, useState } from "react";
import frame1 from "../assets/o-r_hs_155_1.png";
import frame2 from "../assets/o-r_hs_155_2.png";

const frames = [frame1, frame2];

function Walking() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 200);

    const positionInterval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 10);
    }, 200);

    return () => {
      clearInterval(frameInterval);
      clearInterval(positionInterval);
    };
  }, []);

  return (
    <div
      className="walking-person"
      style={{
        left: `${position}px`,
        backgroundImage: `url(${frames[currentFrame]})`,
        width: "100px",
        height: "100px",
      }}
    >
      <div sx={{ width: "100px", height: "100px" }}></div>
    </div>
  );
}

export default Walking;
