import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), // Targets our specific canvas
  antialias: true,
  alpha: true // Allows the CSS background to show through if needed
});

// Use the same ShaderMaterial code from the previous step here...
