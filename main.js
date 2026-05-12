import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), // Targets our specific canvas
  antialias: true,
  alpha: true // Allows the CSS background to show through if needed
});

// Use the same ShaderMaterial code from the previous step here...
const light = new THREE.AmbientLight(0xffffff, 1); 
    scene.add(light);
    ```
*   **Camera Position:** Sometimes the camera is stuck *inside* an object or looking at nothing. Move it back:
    ```javascript
    camera.position.z = 5;
    ```

---

### 3. Forced Refresh
GitHub Pages can be slow to update.
1.  Run `npm run build` again.
2.  Commit and push the new `dist` folder.
3.  On the live site, press `Ctrl + Shift + R` to **Force Reload** and bypass your browser's cache.

**Still black?** Try changing the background color to something bright like red (`scene.background = new THREE.Color(0xff0000)`) just to see if the canvas is rendering at all.
