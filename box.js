class Box {
    constructor(loc) {

        this.origin = loc;
        var geo = new THREE.BoxGeometry(1, 1, 1);
        var mat = new THREE.MeshLambertMaterial({
            color: 0xddaa00
        });
        this.mesh = new THREE.Mesh(geo, mat);
        scene.add(this.mesh);
        this.mesh.position.copy(loc);
        this.mesh.name = 'box';
    }

    move(loc) {
        this.mesh.position.copy(loc);
    }


}
