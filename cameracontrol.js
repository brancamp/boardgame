class CameraControl {

    constructor(camera) {
        //var self = this;
        this.holder = new THREE.Object3D();
        this.moving = false;
        this.holder.add(camera);
        scene.add(this.holder);
    }

    rotate(direction) {
        var self = this;
        if (this.moving == false) {
            this.moving = true;
            var newRot;
            switch (direction) {
                case 'left':
                    newRot = {
                        y: this.holder.rotation.y - Math.PI / 2
                    };
                    break;
                case 'right':
                    newRot = {
                        y: this.holder.rotation.y + Math.PI / 2
                    };
                    break;
            }

            var rot = {
                y: this.holder.rotation.y
            };

            var tween = new TWEEN.Tween(rot)
                .to(newRot, 200)
                .onUpdate(function () {
                    self.holder.rotation.y = rot.y;
                }).onComplete(function () {
                    self.moving = false;
                }).start();
        }

    }
}
