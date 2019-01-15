import * as THREE from "three";

/* Set the scene up */
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true // Turn on shadows in the renderer

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.z = 1;

/* The Starfield: it's simple a three.js sphere */
var geometry = new THREE.SphereGeometry(40, 32, 32);
var material = new THREE.MeshBasicMaterial();
material.map = new THREE.TextureLoader().load("../starfield.png");
material.side = THREE.BackSide;
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/* MeshPhongMaterial won't work if you don't have a light source */
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 1, 1).normalize();
scene.add(light);

/* Conditionally render the planet */

var geometry = new THREE.SphereGeometry(0.5, 32, 32)
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load('/src/planets/neptune/neptunemap.jpg'),
  bumpMap: new THREE.TextureLoader().load('/src/planets/neptune/neptunemap.jpg'),
  bumpScale: 0.005,
})
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

// Camera controls
var cameraPositions = [];
var mouse = { x: 0, y: 0 }
document.addEventListener('mousemove', function (event) {
  mouse.x = (event.clientX / window.innerWidth) - 0.5
  mouse.y = (event.clientY / window.innerHeight) - 0.5
}, false) // The boolean means that the listener should NOT be invoked at most once

cameraPositions.push(function (delta, now) {
  camera.position.x += (mouse.x * 5 - camera.position.x) * (delta * 3)
  camera.position.y += (mouse.y * 5 - camera.position.y) * (delta * 3)
  camera.lookAt(scene.position)
})

// Renders any camera movements
cameraPositions.push(function () {
  renderer.render(scene, camera);
})

/* Animation loop */
var lastTimeMsec = null
requestAnimationFrame(function animate(nowMsec) {
  requestAnimationFrame(animate);
  lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
  var deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
  lastTimeMsec = nowMsec
  cameraPositions.forEach(function (updateFn) {
    updateFn(deltaMsec / 1000, nowMsec / 1000)
  })
});