import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//add light
const dl = new THREE.DirectionalLight(0xffffff, 1);
dl.position.set(2, 4, 1);
scene.add(dl);

//add texture
const texture = new THREE.TextureLoader().load('texture.png' ); 

// color: 0xbbccbb
const geometry = new THREE.PlaneGeometry( 5, 5, 100, 100 );
const material = new THREE.MeshStandardMaterial( { 
    map: texture,
    displacementMap: texture,
    displacementScale: 1
} );
const plane = new THREE.Mesh( geometry, material );
//rotate plane
const degrees = -60; // Angle in degrees
const radians = degrees * (Math.PI / 180);
plane.rotation.x = radians; // Rotate by 45 degrees
plane.rotation.y = 0;



scene.add( plane );

// camera.position.z = 7
camera.position.set( 0, 0, 4)
camera.lookAt(plane.position)

function animate() {
	requestAnimationFrame( animate );

    plane.rotation.z += .005
	renderer.render( scene, camera );
}

animate();