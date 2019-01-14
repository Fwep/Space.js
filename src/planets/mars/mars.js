var geometry = new THREE.SphereGeometry(0.5, 32, 32);
var material = new THREE.MeshPhongMaterial({
  map: new THREE.TextureLoader().load("/src/planets/mars/marsmap1k.jpg"),
  bumpMap: new THREE.TextureLoader().load("/src/planets/mars/marsbump1k.jpg"),
  bumpScale: 0.005
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
