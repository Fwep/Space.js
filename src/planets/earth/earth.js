var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial();
var earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);
material.map = new THREE.TextureLoader().load("../earthmap1k.jpg"); // Applies world map to Earth
material.bumpMap = new THREE.TextureLoader().load("../earthbump1k.jpg"); // Applies the topographical map
material.bumpScale = 0.05;
material.specularMap = new THREE.TextureLoader().load("../earthspec1k.jpg");
material.specular = new THREE.Color("grey");

var geometry = new THREE.SphereGeometry(0.51, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("../earthcloudmap.jpg"),
  side: THREE.DoubleSide,
  opacity: 0.8,
  transparent: true,
  depthWrite: false
});
var cloudMesh = new THREE.Mesh(geometry, material);
earthMesh.add(cloudMesh);

var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 1, 1).normalize();
scene.add(light);