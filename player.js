class Player {
    constructor(x, z, color) {
        this.x = x;
        this.z = z;
        this.y = 0.5;
        this.self = this;
        var geo = new THREE.BoxGeometry(1, 1, 1);
        var mat = new THREE.MeshLambertMaterial({
            color: color
        });
        this.mesh = new THREE.Mesh(geo, mat);
        this.ob = new THREE.Object3D();
        this.ob.add(this.mesh);
        this.mesh.position.set(0, 0.5, 0);
        this.ob.position.set(this.x, this.y, this.z);
        scene.add(this.ob);
        this.moving = false;
        this.raycaster = new THREE.Raycaster();
        this.north = new THREE.Vector3(0, 0, -1);
        this.south = new THREE.Vector3(0, 0, 1);
        this.east = new THREE.Vector3(1, 0, 0);
        this.west = new THREE.Vector3(-1, 0, 0);
    }



    move(dir, vert) {


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
        this.ob.position.set(this.x, this.y += vert, this.z);



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

        var arrowHelper = new THREE.ArrowHelper(dir, origin, 3, 0x000000);
        scene.add(arrowHelper);

        var caster = new THREE.Raycaster();
        caster.set(origin, dir);
        var intersects = caster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            if (intersects[0].distance < 1) {
                console.log("something in the way");
                return false;
            }
        }





        return true;

    } //end of checkmove function




} //end of player class
