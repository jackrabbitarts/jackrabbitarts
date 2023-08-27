import * as THREE from 'three'
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
// import { FontLoader } from 'three/addons/loaders/FontLoader.js'

// import { OrbitControls } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/jsm/examples/controls/OrbitControls.js'


// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Adjust the Z position to move the camera back


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

// ... (import statements and setup code)

// Declare textMesh outside the fontLoader callback
// let textMesh;

// const fontLoader = new FontLoader()

// fontLoader.load('fonts/helvetiker_regular.typeface.json', function (font) {
//     const textGeometry = new TextGeometry('Hello, World!', {
//         font: font,
//         size: 1,
//         height: 0.1,
//         curveSegments: 12,
//         bevelEnabled: false
//     });

//     const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

//     textMesh = new THREE.Mesh(textGeometry, textMaterial);

//     // Set the initial position of the text mesh
//     textMesh.position.set(0, 0, 0); // You can adjust these coordinates
//     scene.add(textMesh);
// });

// ... (light setup and other code)

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // rotate object around circular track
    // const radius = 3;
    // const time = Date.now() * 0.001;
    // const angle = time * 0.2;
    // const x = Math.cos(angle) * radius;
    // const y = 0;
    // const z = Math.sin(angle) * radius;

    // Update the position of the textMesh
    // if (textMesh) {
    //     textMesh.position.set(x, y, z);

    //     // Make the text face the camera
    //     textMesh.lookAt(camera.position);
    // }

    // camera.lookAt(0, 0, 0);
    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();

