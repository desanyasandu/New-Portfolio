import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON'].includes(target.tagName) || target.closest('.interactive')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x - (isHovered ? 30 : 20)}px`, 
          top: `${position.y - (isHovered ? 30 : 20)}px`,
          width: isHovered ? '60px' : '40px',
          height: isHovered ? '60px' : '40px',
          opacity: 0.6,
          background: isHovered ? 'rgba(0, 245, 212, 0.1)' : 'transparent'
        }} 
      />
    </>
  );
};

export default Cursor;
