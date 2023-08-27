import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xeeff00 } );
const plane = new THREE.Mesh( geometry, material );
const degrees = 20; // Angle in degrees
const radians = degrees * (Math.PI / 180);
plane.rotation.x = radians; // Rotate by 45 degrees
plane.rotation.y = 0;
plane.rotation.z = 0
scene.add( plane );

// camera.position.z = 7
camera.position.set( 0, 3, 2)
camera.lookAt(0, 0, 0)

function animate() {
	requestAnimationFrame( animate );

    const radius = 1;
    const time = Date.now() * 0.01;
    const angle = time * 0.2;
    const x = Math.cos(angle) * radius;
    const y = 0;
    const z = Math.sin(angle) * radius;

   
    plane.position.set(x, y, z);
	renderer.render( scene, camera );
}

animate();