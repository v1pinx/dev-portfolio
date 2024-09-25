'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './CustomCursor.css';

const CustomCursor = () => {
  useGSAP(() => {
    const cursor = document.querySelector('.cursor');
    const cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.to({}, { 
      duration: 0.016,
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    cursorScale.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        if (element.classList.contains('s')) {
          cursor?.classList.add('grow-small');
        } else {
          cursor?.classList.add('grow');
        }
      });

      element.addEventListener('mouseleave', () => {
        cursor?.classList.remove('grow', 'grow-small');
      });
    });

    return () => {
      cursorScale.forEach((element) => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
    </>
  );
};

export default CustomCursor;
