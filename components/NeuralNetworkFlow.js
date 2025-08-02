import React, { useRef, useEffect } from "react";

// Simple neural network animation for background
export default function NeuralNetworkFlow({ className = "", style = {} }) {
  const canvasRef = useRef(null);
  const nodes = [];
  const lines = [];
  const NODE_COUNT = 22;
  const LINE_DIST = 180;
  const WIDTH = 1920;
  const HEIGHT = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Initialize nodes
    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * WIDTH,
          y: Math.random() * HEIGHT,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          r: 3 + Math.random() * 2,
        });
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            ctx.save();
            ctx.globalAlpha = 0.15 + 0.25 * (1 - dist / LINE_DIST);
            ctx.strokeStyle =
              "#5a7cff";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#5a7cff";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();
      }
      // Move nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > WIDTH) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > HEIGHT) nodes[i].vy *= -1;
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    initNodes();
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1920}
      height={500}
      className={className}
      style={{
        width: "100%",
        height: "350px",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
