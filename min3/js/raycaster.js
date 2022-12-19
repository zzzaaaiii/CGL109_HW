import * as THREE from 'three';
import { camera, items, scene } from './main-3';
import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';

function onMouseDown(event) {
    var item;
    console.log(items);
    var mouse = new THREE.Vector2();
    //var viewportPos = table.getBoundingClientRect();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    console.log(mouse.x+ " / " + mouse.y);
    console.log(event.clientX + " / " + event.clientY);
    console.log(innerHeight + " / " + innerWidth);

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(items);
    if (intersects.length > 0) {
        item = intersects[0].object;
        if (item.name === 'apple') {
            let text = new MeshText2D("APPLE", {
                align: textAlign.center, font: '20px Arial',
                fillStyle: '#FF0000', antialias: true
            });

            text.position.set(60, 80, 60);
            scene.add(text);
        } else if (item.name === 'banana') {
            let text = new MeshText2D("BANANA", {
                align: textAlign.center, font: '20px Arial',
                fillStyle: '#FFFF00', antialias: true
            });

            text.position.set(0, 60, 0);
            scene.add(text);
        } else if (item.name === 'coconut') {
            let text = new MeshText2D("COCONUT", {
                align: textAlign.center, font: '20px Arial',
                fillStyle: '#964B00', antialias: true
            });

            text.position.set(60, 100, -59);
            scene.add(text);
        } else if (item.name === 'orange') {
            let text = new MeshText2D("ORANGE", {
                align: textAlign.center, font: '20px Arial',
                fillStyle: '#FFA500', antialias: true
            });

            text.position.set(-70, 80, 60);
            scene.add(text);
        } else if (item.name === 'watermelon') {
            let text = new MeshText2D("WATERMELON", {
                align: textAlign.center, font: '20px Arial',
                fillStyle: '#00FF00', antialias: true
            });

            text.position.set(-50, 120, -60);
            scene.add(text);
        }
    }
}


export { onMouseDown };