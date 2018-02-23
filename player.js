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
        this.north = new THREE.Vector3(0, 0, -1);
        this.south = new THREE.Vector3(0, 0, 1);
        this.east = new THREE.Vector3(1, 0, 0);
        this.west = new THREE.Vector3(-1, 0, 0);
    }



    move(dir) {
        this.checkMove(dir);
        switch (dir) {
            case 'north':
                this.z -= 1;
                break;
            case 'south':
                this.z += 1;
                break;
            case 'east':
                this.x += 1;
                break;
            case 'west':
                this.x -= 1;
                break;
        };
        this.ob.position.set(this.x, this.y, this.z);
    } //end of move function


    checkMove(moveDir) {
        var origin = new THREE.Vector3(this.x, this.y + 0.5, this.z);
        var dir = new THREE.Vector3();
        switch (moveDir) {
            case 'north':
                dir.copy(this.north);
                break;
            case 'south':
                dir.copy(this.south);
                break;
            case 'east':
                dir.copy(this.east);
                break;
            case 'west':
                dir.copy(this.west);
                break;
        };

        var arrowHelper = new THREE.ArrowHelper(dir, origin, 3);
        scene.add(arrowHelper);

    } //end of checkmove function




} //end of player class
