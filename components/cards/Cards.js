import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Card() {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const loader = new GLTFLoader();
  let card;
  let controls;

  useEffect(() => {
    const container = containerRef.current;

    camera.position.z = 5;

    loader.load('./scene.glb', function (gltf) {
      card = gltf.scene;
      card.scale.set(2, 2, 2);
      card.position.y = 4;
      scene.add(card);

      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const topLight = new THREE.DirectionalLight(0x333333, 1);
      topLight.position.set(500, 500, 500);
      topLight.castShadow = true;
      scene.add(topLight);

      const ambientLight = new THREE.AmbientLight(0x333333, 1);
      scene.add(ambientLight);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      function animate() {
        requestAnimationFrame(animate);

        controls.update();
        renderer.render(scene, camera);
      }

      function handleResize() {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
      }

      window.addEventListener('resize', handleResize);

      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default Card;
