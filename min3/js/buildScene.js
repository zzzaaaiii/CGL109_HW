import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';
import { scene, items } from './main-3';

var Atext, Btext, Ctext, Otext, Wtext;
function buildScene() {
   //let box = new THREE.Mesh (new THREE.BoxGeometry(50,20,10), new THREE.MeshNormalMaterial());
   //scene.add (box);
   var loader = new THREE.TextureLoader();
   var Map = loader.load('https://i.imgur.com/xPTskqX.jpg');
   let table = new THREE.Mesh(new THREE.BoxGeometry(200, 10, 200), new THREE.MeshBasicMaterial({ map: Map }));
   //let table = new THREE.Mesh (new THREE.BoxGeometry(200,5,200), new THREE.MeshNormalMaterial());
   scene.add(table);

   var AMap = loader.load('https://i.imgur.com/1vDv5NF.png');
   var BMap = loader.load('https://i.imgur.com/khjNEzk.png');
   var CMap = loader.load('https://i.imgur.com/ECtuwf3.png');
   var OMap = loader.load('https://i.imgur.com/XIfu1Lq.png');
   var WMap = loader.load('https://i.imgur.com/MqDbWr9.png');
   let apple = new THREE.Mesh(new THREE.SphereGeometry(20, 44, 22), new THREE.MeshBasicMaterial({ map: AMap }));
   apple.position.set(60, 25, 60);
   apple.name = 'apple';
   let coconut = new THREE.Mesh(new THREE.SphereGeometry(30, 44, 22), new THREE.MeshBasicMaterial({ map: CMap }));
   coconut.position.set(60, 30, -60);
   coconut.name = 'coconut';
   let orange = new THREE.Mesh(new THREE.SphereGeometry(20, 44, 22), new THREE.MeshBasicMaterial({ map: OMap }));
   orange.position.set(-60, 25, 60);
   orange.name = 'orange';
   let watermelon = new THREE.Mesh(new THREE.SphereGeometry(40, 44, 22), new THREE.MeshBasicMaterial({ map: WMap }));
   watermelon.position.set(-60, 35, -60);
   watermelon.name = 'watermelon';
   let banana = new THREE.Mesh(new THREE.CapsuleGeometry(10, 25, 10, 20), new THREE.MeshBasicMaterial({ map: BMap }));
   banana.position.set(0, 10, 0);
   banana.rotation.x = Math.PI / 2;
   banana.name = 'banana';

   items.push(apple, banana, coconut, orange, watermelon);
   scene.add(apple, banana, coconut, orange, watermelon);

   /*Atext = new MeshText2D("APPLE", {
      align: textAlign.center, font: '20px Arial',
      fillStyle: '#FF0000', antialias: true
   });

   Atext.position.set(60, 80, 60);
   //Atext.scale.set(1.5, 1.5, 0.5);

   scene.add(Atext);
   Btext = new MeshText2D("BANANA", {
      align: textAlign.center, font: '20px Arial',
      fillStyle: '#FFFF00', antialias: true
   });

   Btext.position.set(0, 60, 0);
   scene.add(Btext);

   Ctext = new MeshText2D("COCONUT", {
      align: textAlign.center, font: '20px Arial',
      fillStyle: '#964B00', antialias: true
   });

   Ctext.position.set(60, 100, -59);
   scene.add(Ctext);

   Otext = new MeshText2D("ORANGE", {
      align: textAlign.center, font: '20px Arial',
      fillStyle: '#FFA500', antialias: true
   });

   Otext.position.set(-70, 80, 60);
   scene.add(Otext);

   Wtext = new MeshText2D("WATERMELON", {
      align: textAlign.center, font: '20px Arial',
      fillStyle: '#00FF00', antialias: true
   });

   Wtext.position.set(-50, 120, -60);
   scene.add(Wtext);*/
}


export { buildScene };

