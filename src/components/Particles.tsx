import { onMount } from 'solid-js';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  neighbors: any[];
  img: HTMLImageElement;
}

export default function FloatingParticles() {
  onMount(() => {
    const myCanvas = document.querySelector(
      '#particles-canvas'
    ) as HTMLCanvasElement;
    if (!myCanvas) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = myCanvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.scale(dpr, dpr);

    myCanvas.width = window.innerWidth * dpr;
    myCanvas.height = window.innerHeight * dpr;
    myCanvas.style.width = `${window.innerWidth}px`;
    myCanvas.style.height = `${window.innerHeight}px`;

    const images = [
      'https://ik.imagekit.io/s2mf0sfxw/This_Week/bg-synth.png',
      'https://ik.imagekit.io/s2mf0sfxw/This_Week/bg-guitar.png?updatedAt=1686420505510',
    ];

    const particles: Particle[] = [];

    let lastTimestamp = performance.now();

    Promise.all(
      images.map((src) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      })
    )
      .then((imgs) => {
        for (let i = 0; i < 60; i += 1) {
          const x = Math.floor(Math.random() * myCanvas.width);
          const y = Math.floor(Math.random() * myCanvas.height);
          const size = Math.random() * (200 - 100) + 20;
          const speedX = Math.random() * 100;
          const speedY = Math.random() * 100;
          const dirX = Math.random() > 0.5 ? 1 : -1;
          const dirY = Math.random() > 0.5 ? 1 : -1;
          const img = imgs[Math.floor(Math.random() * imgs.length)]; // Pick a random image

          particles.push({
            x,
            y,
            size,
            speedX: dirX * speedX,
            speedY: dirY * speedY,
            neighbors: [],
            img,
          });
        }

        requestAnimationFrame(draw);
      })
      .catch(console.error);

    function draw(timestamp: number) {
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

      for (let i = 0; i < particles.length; i += 1) {
        let particle = particles[i];

        particle.x += particle.speedX * delta;
        particle.y += particle.speedY * delta;

        if (particle.x < 0) {
          particle.x = myCanvas.width;
        } else if (particle.x > myCanvas.width) {
          particle.x = 0;
        }
        if (particle.y < 0) {
          particle.y = myCanvas.height;
        } else if (particle.y > myCanvas.height) {
          particle.y = 0;
        }

        ctx.drawImage(
          particle.img,
          particle.x,
          particle.y,
          particle.size,
          particle.size
        );
      }

      requestAnimationFrame(draw);
    }
  });

  return (
    <canvas
      class='absolute'
      id='particles-canvas'
      width={'100vw'}
      height={'100vh'}></canvas>
  );
}
