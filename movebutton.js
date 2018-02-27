class MoveButton {
    constructor(name) {
        this.name = name;
        var geo = new THREE.BoxGeometry(2, 0.5, 2);
        var mat = new THREE.MeshLambertMaterial({
            color: 0x26b35d
        });

        this.mesh = new THREE.Mesh(geo, mat);
        scene.add(this.mesh);
    }

    place(x, y, z) {
        this.mesh.position.set(x, y, z);
        this.mesh.name = this.name;
    }
}
