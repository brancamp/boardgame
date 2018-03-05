class goal {
    constructor(x, z) {
        this.speed = 0.01;
        var geo = new THREE.TorusGeometry(1, 0.2, 8, 4);
        var mat = new THREE.MeshLambertMaterial({
            color: 0xffffff
        });

        this.mesh = new THREE.Mesh(geo, mat);

        scene.add(this.mesh);
        this.mesh.position.set(x, 1, z);
    }

    update() {
        this.mesh.rotation.y += this.speed;
    }

}
