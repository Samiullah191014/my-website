import React, { useEffect, useState } from 'react';
import './Cursor.css';

function Cursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
    >
      <div className="inner-dot"></div>
    </div>
  );
}

export default Cursor;
