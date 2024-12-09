import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cerveauGauche from '../images/cerveau-gauche.png';
import cerveauDroit from '../images/cerveau-droit.png';
import '../styles/brainanimation.css';

gsap.registerPlugin(ScrollTrigger);

const BrainAnimation = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const containerRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      // Determine if we are on a mobile device
      const isMobile = window.innerWidth < 768;

      // Initial positions
      gsap.set(leftImageRef.current, { y: '0%', x: '0%', scale: 1 });
      gsap.set(rightImageRef.current, { y: '0%', x: '0%', scale: 1 });
      gsap.set(textLeftRef.current, { opacity: 0, x:  100,   y: !isMobile ? 100 : 0 }); // Set initial position for left text
      gsap.set(textRightRef.current, { opacity: 0, x: -100, y: !isMobile ? -100 : 0 }); // Set initial position for right text

      // Combined timeline for Y, X axis animations and text opacity
      const animationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 22%', // Start a bit earlier
          end: '+=1320', // Total distance for all animations (adjusted for three equal parts)
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        }
      });

      if (isMobile) {
        animationTimeline
          .to(leftImageRef.current, { y: '-47%', duration: 0.38, delay: 0.2 }) // Adding a 0.2 second delay
          .to(rightImageRef.current, { y: '47%', duration: 0.38 }, '<')
          .to(leftImageRef.current, { x: '-32%', scale: 0.65, duration: 0.38 }) // Second third for X axis and scale
          .to(rightImageRef.current, { x: '34%', scale: 0.65, duration: 0.38 }, '<')
          .add(() => {
            gsap.set(textLeftRef.current, { display: 'block' });
            gsap.set(textRightRef.current, { display: 'block' });
          })
          .to(textLeftRef.current, { opacity: 1, x: 0, duration: 0.5 }, '-=0.4') // Slide in from right a bit earlier
          .to(textRightRef.current, { opacity: 1, x: 0, duration: 0.5 }, '<'); // Slide in from left
      } else {
        animationTimeline
          .to(leftImageRef.current, { y: '-50%', duration: 0.38 }) // First third for Y axis animation
          .to(rightImageRef.current, { y: '50%', duration: 0.38 }, '<')
          .to(leftImageRef.current, { x: '-150%', scale: 0.75, duration: 0.38 }, ) // Second third for X axis and scale
          .to(rightImageRef.current, { x: '150%', scale: 0.75, duration: 0.38 }, '<')

          .add(() => {
            gsap.set(textLeftRef.current, { display: 'block' });
            gsap.set(textRightRef.current, { display: 'block' });
          })
          .to(textLeftRef.current, { opacity: 1, x: 0, duration: 0.5 }, '-=0.4') // Slide in from right a bit earlier
          .to(textRightRef.current, { opacity: 1, x: 0, duration: 0.5 }, '<'); // Slide in from left
      }
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section className="animation " ref={containerRef}>
      <div className="brain-container">
        <div className="section-left">
          <img ref={leftImageRef} className="image" src={cerveauGauche} alt="Cerveau Gauche" />
          <div ref={textLeftRef} className="text hidden">
            <h6>How We Use</h6>
            <h3>Intelligence</h3>
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
          </div>
        </div>
        <div className="section-right">
          <div ref={textRightRef} className="text hidden">
            <h6>How We Use</h6>
            <h3>Creativity</h3>
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
          </div>
          <img ref={rightImageRef} className="image" src={cerveauDroit} alt="Cerveau Droit" />
        </div>
      </div>
    </section>
  );
};

export default BrainAnimation;
