import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildScene } from './buildScene';
import { onMouseDown } from './raycaster';

var camera, scene, renderer, items = [];

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (100,200,100);
  
  const controls = new OrbitControls( camera, renderer.domElement );

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);
  
  buildScene();
  window.addEventListener('pointerdown', onMouseDown, false);
}

function animate() {

  /*Atext.lookAt(camera.position);
  Btext.lookAt(camera.position);
  Ctext.lookAt(camera.position);
  Otext.lookAt(camera.position);
  Wtext.lookAt(camera.position);*/
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

}



export {scene, camera, items};
