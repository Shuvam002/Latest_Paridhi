import React, { useEffect } from "react";

const BackgroundAnimation = () => {
  useEffect(() => {
    const particleCount = 150;
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: false,
            value_area: 1000,
            random: false,
          },
          random: false,
        },
        color: {
          value: "#ff0000",
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 10,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#808080",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: true,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 100,
            duration: 1,
            opacity: 8,
            speed: 2,
          },
          repulse: {
            distance: 80,
            duration: 0.1,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <section
        id="particles-js"
        style={{ backgroundColor: "#000000", height: "100%", width: "100%" }}
      ></section>
    </div>
  );
};

export default BackgroundAnimation;
