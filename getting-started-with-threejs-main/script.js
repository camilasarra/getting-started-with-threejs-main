import * as THREE from 'three'

//canvas
const canvas = document.querySelector('canvas.webgl')

// console.log(THREE)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1) //shape of my object
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.y = 1

scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    heigth: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth)//usually 35
camera.position.z = 3
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas 
})
renderer.setSize(sizes.width, sizes.heigth)

renderer.render(scene, camera)


