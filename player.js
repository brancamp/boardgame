class Player {
    constructor(x, z) {
        this.x = x;
        this.z = z;
        this.y = 0.5;
        this.self = this;
        var geo = new THREE.BoxGeometry(1, 1, 1);
        var mat = new THREE.MeshBasicMaterial({
            color: 0x2D8D9F
        });
        var mesh = new THREE.Mesh(geo, mat);
        this.ob = new THREE.Object3D();
        this.ob.add(mesh);
        mesh.position.set(0, 0.5, 0);
        this.ob.position.set(this.x, this.y, this.z);
        scene.add(this.ob);
        this.moving = false;
        this.raycaster = new THREE.Raycaster();
    }



    move(dir) {
        this.checkMove(dir);
        switch (dir) {
            case 1:
                this.x -= 1;
                break;
            case 2:
                this.z += 1;
                break;
            case 3:
                this.z -= 1;
                break;
            case 4:
                this.x += 1;
                break;
        };
        this.ob.position.set(this.x, this.y, this.z);
    } //end of move function


    checkMove(moveDir) {
        var origin = new THREE.Vector3(this.x, this.y + 0.5, this.z);
        var dir = new THREE.Vector3();
        switch (moveDir) {
            case 1:
                dir.set(-1, 0, 0);
                break;
            case 2:
                dir.set(0, 0, 1);
                break;
            case 3:
                dir.set(0, 0, -1);
                break;
            case 4:
                dir.set(1, 0, 0);
                break;
        };

        var arrowHelper = new THREE.ArrowHelper(dir, origin, 2);
        scene.add(arrowHelper);

    } //end of checkmove function




} //end of player class
