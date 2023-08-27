import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js'
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/loaders/FontLoader.js'

// import { OrbitControls } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/jsm/examples/controls/OrbitControls.js'


// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, -10); // Adjust the Z position to move the camera back


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add text
const fontLoader = new FontLoader();
fontLoader.load('/helvetiker_bold.typeface.json', function (font) {
    // Create text geometry
    console.log('font loaded')
    const textGeometry = new TextGeometry('Hello, World!', {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: false
    });

    // Create text material
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create text mesh
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Set the position of the text mesh
    textMesh.position.set(x, y, z);

    // Add the text mesh to the scene
    scene.add(textMesh);
});

  const light = new THREE.PointLight( 0xff0000, 1, 100 );
  light.position.set( 50, 50, 50 );
  scene.add( light );




// Add OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  const radius = 3; // Adjust the radius of the circle
  const time = Date.now() * 0.001;
  const angle = time * 0.2; // Adjust the factor for the desired rotation speed
  const x = Math.cos(angle) * radius;
  const y = 0; // Keep the y-coordinate constant
  const z = Math.sin(angle) * radius;
  
  textMesh.position.set(x, y, z);
  
  // Make the text face the camera

  textMesh.lookAt(camera.position);
  camera.lookAt(0, 0, 0);


  renderer.render(scene, camera);
};

animate();
