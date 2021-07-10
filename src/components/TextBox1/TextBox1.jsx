import React from "react";
import { useState } from "react";
import "./TextBox1.css";

function TextBox1() {
  const [boxPosition, setBoxPosition] = useState({
    top: 0,
    left: 0,
  });

  const [styleObj, setStyleObj] = useState({
    color: "white",
    position: "relative",
    top: `${boxPosition.top}px`,
    left: `${boxPosition.left}px`,
  });

  const [mouseDiff, setMouseDiff] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMouseDiff((obj) => ({
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setBoxPosition((obj) => ({
        top: obj.top + e.clientY - mouseDiff.y,
        left: obj.left + e.clientX - mouseDiff.x,
        // top: "100px",
        // left: "100px",
      }));

      setStyleObj((obj) => ({
        ...obj,
        top: `${boxPosition.top}px`,
        left: `${boxPosition.left}px`,
      }));

      setMouseDiff((obj) => ({
        x: e.clientX,
        y: e.clientY,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // console.log(document.querySelector("." + e.target.classList[0]).offsetTop);
  };

  return (
    <div>
      <div
        className="text-box-1"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={styleObj}
      >
        xssc
      </div>
    </div>
  );
}

export default TextBox1;