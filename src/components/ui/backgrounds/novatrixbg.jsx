import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

// Vertex Shader
const vert = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
}
`;

// Fragment Shader
const frag = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;

varying vec2 vUv;

void main() {
    float mr = min(uResolution.x, uResolution.y);
    vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

    float d = -uTime * 1.2;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
    }
    d += uTime * 1.0;
    float red = 0.92 + 0.07 * cos(uv.x * d + a);
    float green = 0.75 + 0.07 * cos(uv.y * a - d);
    float blue = 0.7 + 0.05 * cos(a + d);
    vec3 col = vec3(red, green, blue);
    gl_FragColor = vec4(col, 1.0);
}
`;

export const Novatrix = () => {
  const ctnDom = useRef(null);

  useEffect(() => {
    if (!ctnDom.current) {
      return;
    }

    const ctn = ctnDom.current;
    const renderer = new Renderer();
    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
    }
    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(0.8, 0.2, 0.2) },
        uResolution: {
          value: [
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ],
        },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    let animateId;

    animateId = requestAnimationFrame(update);

    function update(t) {
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    ctn.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={ctnDom} className="gradient-canvas h-full w-full"></div>;
};

const Background = () => {
  return (
    <div className="h-screen w-screen">
      <Novatrix />
    </div>
  );
};

export default Background;
