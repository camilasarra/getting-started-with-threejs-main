// import * as THREE from 'three'

// //canvas
// const canvas = document.querySelector('canvas.webgl')

// // console.log(THREE)

// const scene = new THREE.Scene()

// const geometry = new THREE.BoxGeometry(1, 1, 1) //shape of my object
// const material = new THREE.MeshBasicMaterial({ color: 'red' })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1

// scene.add(mesh)

// //sizes
// const sizes = {
//     width: 800,
//     heigth: 600
// }

// //camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)//usually 35
// camera.position.z = 3
// scene.add(camera)

// //renderer
// const renderer = new THREE.WebGLRenderer({ 
//     canvas: canvas 
// })
// renderer.setSize(sizes.width, sizes.heigth)

// renderer.render(scene, camera)

// //console.log(mesh.position.normalize) // take the lenght to 1 

// //mesh.position.set(//pasas x y and z in that order)

// //
// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

