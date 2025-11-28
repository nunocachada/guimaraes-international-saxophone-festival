"use client";

import { useEffect, useRef } from "react";

class Particle {
  pos = { x: 0, y: 0 };
  vel = { x: 0, y: 0 };
  acc = { x: 0, y: 0 };
  target = { x: 0, y: 0 };

  closeEnoughTarget = 100;
  maxSpeed = 1.0;
  maxForce = 0.1;
  particleSize = 10;
  isKilled = false;

  startColor = { r: 0, g: 0, b: 0 };
  targetColor = { r: 0, g: 0, b: 0 };
  colorWeight = 0;
  colorBlendRate = 0.01;

  move() {
    // Check if particle is close enough to its target to slow down
    let proximityMult = 1;
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) +
        Math.pow(this.pos.y - this.target.y, 2)
    );

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    // Add force towards target
    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y
    );
    if (magnitude > 0) {
      towardsTarget.x =
        (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y =
        (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;

    // Move particle
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx, drawAsPoints) {
    // Blend towards target color
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
    }

    // Calculate current color
    const currentColor = {
      r: Math.round(
        this.startColor.r +
          (this.targetColor.r - this.startColor.r) * this.colorWeight
      ),
      g: Math.round(
        this.startColor.g +
          (this.targetColor.g - this.startColor.g) * this.colorWeight
      ),
      b: Math.round(
        this.startColor.b +
          (this.targetColor.b - this.startColor.b) * this.colorWeight
      ),
    };

    if (drawAsPoints) {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
    } else {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  kill(width, height) {
    if (!this.isKilled) {
      // Generate random angle from 0 to 2π (full circle)
      const angle = Math.random() * Math.PI * 2;
      const mag = (width + height) / 2;

      // Calculate position on circle perimeter at distance 'mag' from center
      const centerX = width / 2;
      const centerY = height / 2;
      const exitX = centerX + Math.cos(angle) * mag;
      const exitY = centerY + Math.sin(angle) * mag;

      this.target.x = exitX;
      this.target.y = exitY;

      // Begin blending color to black
      this.startColor = {
        r:
          this.startColor.r +
          (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g:
          this.startColor.g +
          (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b:
          this.startColor.b +
          (this.targetColor.b - this.startColor.b) * this.colorWeight,
      };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;

      this.isKilled = true;
    }
  }
}

const DEFAULT_WORDS = ["LeLo", "SAAS", "PLATFORM", "LELO"];

export function ParticleTextEffect({ words = DEFAULT_WORDS }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    isPressed: false,
    isRightClick: false,
  });

  const pixelSteps = 6;
  const drawAsPoints = true;

  const generateRandomPos = (x, y, mag, canvasWidth, canvasHeight) => {
    // Generate random angle from 0 to 2π (full circle)
    const angle = Math.random() * Math.PI * 2;

    // Calculate position on circle perimeter at distance 'mag' from center
    const startX = x + Math.cos(angle) * mag;
    const startY = y + Math.sin(angle) * mag;

    return {
      x: startX,
      y: startY,
    };
  };

  const nextWord = (word, canvas) => {
    // Create off-screen canvas for text rendering
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;
    const offscreenCtx = offscreenCanvas.getContext("2d");

    // Draw text with a font that supports Unicode musical symbols
    offscreenCtx.fillStyle = "white";

    // Use fonts that support Unicode musical symbols
    // Priority: MuseJazz (font-jazz) -> Noto Music -> Fallbacks only if needed
    const getFontFamilyName = (cssVar) => {
      if (typeof window !== "undefined") {
        try {
          const style = getComputedStyle(document.documentElement);
          const fontFamily = style.getPropertyValue(cssVar).trim();
          // Remove quotes and return the font name
          return fontFamily.replace(/['"]/g, "") || null;
        } catch (e) {
          return null;
        }
      }
      return null;
    };

    // Get font names from CSS variables, fallback to known names
    const museJazzFont = getFontFamilyName("--font-jazz") || "MuseJazz Text";
    const notoMusicFont = getFontFamilyName("--font-music") || "Noto Music";

    // Primary fonts: MuseJazz and Noto Music (both support musical symbols)
    // Fallbacks only used if primary fonts fail
    const fontStack = [
      `"${museJazzFont}"`,
      `"${notoMusicFont}"`,
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Arial Unicode MS"',
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(", ");

    // Calculate responsive font size based on canvas width
    // For single characters (symbols), use a larger base size
    const isSingleChar = word.length === 1;
    let fontSize = isSingleChar
      ? Math.min(canvas.width * 0.25, 150) // Larger base size for single characters
      : Math.min(canvas.width * 0.15, 100);

    // Ensure text fits within canvas width with padding (90% of width for safety margin)
    const maxTextWidth = canvas.width * 0.9;
    offscreenCtx.font = `bold ${fontSize}px ${fontStack}`;
    offscreenCtx.textAlign = "center";
    offscreenCtx.textBaseline = "middle";

    // Measure text width and adjust font size if needed
    const textMetrics = offscreenCtx.measureText(word);
    if (textMetrics.width > maxTextWidth) {
      // Reduce font size proportionally to fit within maxTextWidth
      fontSize = (fontSize * maxTextWidth) / textMetrics.width;
      // Ensure minimum font size for readability (higher minimum for single chars)
      fontSize = Math.max(fontSize, isSingleChar ? 40 : 20);
      // Update font with adjusted size
      offscreenCtx.font = `bold ${fontSize}px ${fontStack}`;
    } else if (isSingleChar && textMetrics.width < maxTextWidth * 0.3) {
      // For single characters that are too small, increase font size
      fontSize = Math.min(fontSize * 1.5, Math.min(canvas.width * 0.3, 180));
      fontSize = Math.max(fontSize, 40); // Ensure minimum visibility
      offscreenCtx.font = `bold ${fontSize}px ${fontStack}`;
    }

    offscreenCtx.fillText(word, canvas.width / 2, canvas.height / 3);

    const imageData = offscreenCtx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );
    const pixels = imageData.data;

    // Vibrant kid-friendly colors palette
    const vibrantColors = [
      { r: 239, g: 68, b: 68 }, // Bright Red
      { r: 59, g: 130, b: 246 }, // Bright Blue
      { r: 34, g: 197, b: 94 }, // Bright Green
      { r: 168, g: 85, b: 247 }, // Bright Purple
      { r: 250, g: 204, b: 21 }, // Bright Yellow
      { r: 236, g: 72, b: 153 }, // Bright Pink
      { r: 6, g: 182, b: 212 }, // Bright Cyan
      { r: 249, g: 115, b: 22 }, // Bright Orange
      { r: 251, g: 191, b: 36 }, // Bright Amber
    ];

    const particles = particlesRef.current;
    let particleIndex = 0;

    // Collect coordinates
    const coordsIndexes = [];
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      coordsIndexes.push(i);
    }

    // Shuffle coordinates for fluid motion
    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [coordsIndexes[i], coordsIndexes[j]] = [
        coordsIndexes[j],
        coordsIndexes[i],
      ];
    }

    for (const coordIndex of coordsIndexes) {
      const pixelIndex = coordIndex;
      const alpha = pixels[pixelIndex + 3];

      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width;
        const y = Math.floor(pixelIndex / 4 / canvas.width);

        let particle;

        if (particleIndex < particles.length) {
          particle = particles[particleIndex];
          particle.isKilled = false;
          particleIndex++;
        } else {
          particle = new Particle();

          const randomPos = generateRandomPos(
            canvas.width / 2,
            canvas.height / 2,
            (canvas.width + canvas.height) / 2,
            canvas.width,
            canvas.height
          );
          particle.pos.x = randomPos.x;
          particle.pos.y = randomPos.y;

          particle.maxSpeed = Math.random() * 6 + 4;
          particle.maxForce = particle.maxSpeed * 0.05;
          particle.particleSize = Math.random() * 6 + 6;
          particle.colorBlendRate = Math.random() * 0.0275 + 0.0025;

          particles.push(particle);
        }

        // Set color transition - assign random vibrant color to each particle
        const randomColor =
          vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
        particle.startColor = {
          r:
            particle.startColor.r +
            (particle.targetColor.r - particle.startColor.r) *
              particle.colorWeight,
          g:
            particle.startColor.g +
            (particle.targetColor.g - particle.startColor.g) *
              particle.colorWeight,
          b:
            particle.startColor.b +
            (particle.targetColor.b - particle.startColor.b) *
              particle.colorWeight,
        };
        particle.targetColor = randomColor;
        particle.colorWeight = 0;

        particle.target.x = x;
        particle.target.y = y;
      }
    }

    // Kill remaining particles
    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height);
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = particlesRef.current;

    // Background with motion blur
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.move();
      particle.draw(ctx, drawAsPoints);

      // Remove dead particles that are out of bounds
      if (particle.isKilled) {
        if (
          particle.pos.x < 0 ||
          particle.pos.x > canvas.width ||
          particle.pos.y < 0 ||
          particle.pos.y > canvas.height
        ) {
          particles.splice(i, 1);
        }
      }
    }

    // Handle mouse interaction
    if (mouseRef.current.isPressed && mouseRef.current.isRightClick) {
      particles.forEach((particle) => {
        const distance = Math.sqrt(
          Math.pow(particle.pos.x - mouseRef.current.x, 2) +
            Math.pow(particle.pos.y - mouseRef.current.y, 2)
        );
        if (distance < 50) {
          particle.kill(canvas.width, canvas.height);
        }
      });
    }

    // Auto-advance words
    frameCountRef.current++;
    if (frameCountRef.current % 240 === 0) {
      wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
      nextWord(words[wordIndexRef.current], canvas);
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    // Initial resize
    resizeCanvas();

    // Initialize with first word
    nextWord(words[0], canvas);

    // Start animation
    animate();

    // Mouse event handlers
    const handleMouseDown = (e) => {
      mouseRef.current.isPressed = true;
      mouseRef.current.isRightClick = e.button === 2;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false;
      mouseRef.current.isRightClick = false;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleResize = () => {
      resizeCanvas();
      // Reinitialize particles with new dimensions
      nextWord(words[wordIndexRef.current], canvas);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full absolute inset-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "black", zIndex: 10 }}
      />
    </div>
  );
}
