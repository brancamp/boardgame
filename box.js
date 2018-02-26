class Box {
    constructor(loc) {
        var geo = new THREE.BoxGeometry(1, 1, 1);
        var mat = new THREE.MeshBasicMaterial({
            color: 0xddaa00
        });
        var mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);
        mesh.position.copy(loc);
    }


}
