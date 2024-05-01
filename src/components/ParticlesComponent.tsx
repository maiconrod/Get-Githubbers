import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
        fpsLimit: 60,
        particles: {
          number: {
            value: 80
          },
          color: {
            value: "#656668",
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          },
          links: {
            enable: true,
            distance: 100,
            color: "#FFFFFF",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              color: "#ffffff",
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 200
            },
            push: {
              quantity: 4
            }
          }
        },
        background: {
          color: "#000000"
        }
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return (
    <>
      <div>Olá</div>
    </>
  );
};

export default ParticleComponent;
