import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.179/build/three.module.js";
import {GLTFLoader} from "https://cdn.jsdelivr.net/npm/three@0.179/examples/jsm/loaders/GLTFLoader.js";

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
45,
innerWidth/innerHeight,
0.1,
100
);

camera.position.set(0,1.5,8);

const renderer=new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(innerWidth,innerHeight);

renderer.setPixelRatio(devicePixelRatio);

document.getElementById("scene").appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff,1));

const light=new THREE.DirectionalLight(0xffffff,3);

light.position.set(3,5,3);

scene.add(light);

let koi;

const loader=new GLTFLoader();

loader.load("assets/koi.glb",(gltf)=>{

koi=gltf.scene;

koi.scale.set(2.8,2.8,2.8);

scene.add(koi);

});

const clock=new THREE.Clock();

function animate(){

requestAnimationFrame(animate);

const t=clock.getElapsedTime();

if(koi){

koi.position.y=Math.sin(t*1.4)*0.08;

koi.rotation.z=Math.sin(t*0.8)*0.08;

koi.rotation.y=Math.sin(t*0.4)*0.1;

}

camera.position.x=Math.sin(t*0.25)*0.35;

camera.lookAt(0,0,0);

renderer.render(scene,camera);

}

animate();

addEventListener("resize",()=>{

camera.aspect=innerWidth/innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(innerWidth,innerHeight);

});
