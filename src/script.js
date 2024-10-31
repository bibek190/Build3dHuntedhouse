// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { Sky } from "three/addons/objects/Sky.js";
// import { Timer } from "three/addons/misc/Timer.js";
// import GUI from "lil-gui";

// /**
//  * Base
//  */
// // Debug
// const gui = new GUI();

// // Canvas
// const canvas = document.querySelector("canvas.webgl");

// // Scene
// const scene = new THREE.Scene();

// /*
// Textures
// */
// const textureLoader = new THREE.TextureLoader();

// // floorTextures
// const floorAlphaTexture = textureLoader.load("./floor/alpha.webp");
// const floorColorTexture = textureLoader.load(
//   "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
// );
// const floorArmTexture = textureLoader.load(
//   "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
// );
// const floorNormalTexture = textureLoader.load(
//   "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg"
// );
// const floorDisplacementTexture = textureLoader.load(
//   "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg"
// );

// floorColorTexture.colorSpace = THREE.SRGBColorSpace;

// floorColorTexture.repeat.set(8, 8);
// floorArmTexture.repeat.set(8, 8);
// floorNormalTexture.repeat.set(8, 8);
// floorDisplacementTexture.repeat.set(8, 8);

// floorColorTexture.wrapS = THREE.RepeatWrapping;
// floorColorTexture.wrapT = THREE.RepeatWrapping;

// floorArmTexture.wrapS = THREE.RepeatWrapping;
// floorArmTexture.wrapT = THREE.RepeatWrapping;

// floorNormalTexture.wrapS = THREE.RepeatWrapping;
// floorNormalTexture.wrapT = THREE.RepeatWrapping;

// floorDisplacementTexture.wrapS = THREE.RepeatWrapping;
// floorDisplacementTexture.wrapT = THREE.RepeatWrapping;

// /**
//  * House
//  */
// // Temporary sphere

// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(20, 20, 100, 100),
//   new THREE.MeshStandardMaterial({
//     transparent: true,
//     alphaMap: floorAlphaTexture,
//     map: floorColorTexture,
//     aoMap: floorArmTexture,
//     roughnessMap: floorArmTexture,
//     metalnessMap: floorArmTexture,
//     normalMap: floorNormalTexture,
//     displacementMap: floorDisplacementTexture,
//     displacementScale: 0.3,
//     displacementBias: -0.2,
//   })
// );

// // Wall
// const wallArmTexture = textureLoader.load(
//   "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"
// );
// const wallColorTexture = textureLoader.load(
//   "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"
// );
// const wallNormalTexture = textureLoader.load(
//   "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg"
// );
// wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// // floor
// floor.rotation.x = -Math.PI * 0.5;
// scene.add(floor);

// gui
//   .add(floor.material, "displacementScale")
//   .min(0)
//   .max(1)
//   .step(0.001)
//   .name("floorDisplacementScale");
// gui
//   .add(floor.material, "displacementBias")
//   .min(-1)
//   .max(1)
//   .step(0.001)
//   .name("floorDisplacementBias");

// const house = new THREE.Group();
// scene.add(house);

// // roof
// const roofArmTexture = textureLoader.load(
//   "./roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg"
// );
// const roofColorTexture = textureLoader.load(
//   "./roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg"
// );
// const roofNormalTexture = textureLoader.load(
//   "./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg"
// );
// roofColorTexture.colorSpace = THREE.SRGBColorSpace;

// roofColorTexture.repeat.set(3, 1);
// roofArmTexture.repeat.set(3, 1);
// roofNormalTexture.repeat.set(3, 1);

// roofColorTexture.wrapS = THREE.RepeatWrapping;
// roofArmTexture.wrapS = THREE.RepeatWrapping;
// roofNormalTexture.wrapS = THREE.RepeatWrapping;

// // Bushes

// const bushColorTexture = textureLoader.load(
//   "./bushes/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.jpg"
// );
// const bushArmTexture = textureLoader.load(
//   "./bushes/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg"
// );
// const bushNormalTexture = textureLoader.load(
//   "./bushes/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.jpg"
// );
// bushColorTexture.colorSpace = THREE.SRGBColorSpace;

// bushColorTexture.repeat.set(2, 1);
// bushArmTexture.repeat.set(2, 1);
// bushNormalTexture.repeat.set(2, 1);

// bushColorTexture.wrapS = THREE.RepeatWrapping;
// bushNormalTexture.wrapS = THREE.RepeatWrapping;
// bushArmTexture.wrapS = THREE.RepeatWrapping;

// // graves

// const graveColorTexture = textureLoader.load(
//   "./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.jpg"
// );
// const graveArmTexture = textureLoader.load(
//   "./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.jpg"
// );
// const graveNormalTexture = textureLoader.load(
//   "./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.jpg"
// );
// graveColorTexture.colorSpace = THREE.SRGBColorSpace;

// graveColorTexture.repeat.set(0.3, 0.4);
// graveArmTexture.repeat.set(0.3, 0.4);
// graveNormalTexture.repeat.set(0.3, 0.4);

// graveColorTexture.wrapS = THREE.RepeatWrapping;
// graveArmTexture.wrapS = THREE.RepeatWrapping;
// graveNormalTexture.wrapS = THREE.RepeatWrapping;

// // door

// const doorColorTexture = textureLoader.load("./door/color.webp");
// const doorAlphaTexture = textureLoader.load("./door/alpha.webp");
// const doorAmbientTexture = textureLoader.load("./door/ambientOcclusion.webp");
// const doorHeightTexture = textureLoader.load("./door/height.webp");
// const doorMetalnessTexture = textureLoader.load("./door/metalness.webp");
// const doorNormalTexture = textureLoader.load("./door/normal.webp");
// const doorRoughnessTexture = textureLoader.load("./door/roughness.webp");

// doorColorTexture.colorSpace = THREE.SRGBColorSpace;

// // walls

// const walls = new THREE.Mesh(
//   new THREE.BoxGeometry(4, 2.5, 4),
//   new THREE.MeshStandardMaterial({
//     map: wallColorTexture,
//     aoMap: wallArmTexture,
//     roughnessMap: wallArmTexture,
//     metalnessMap: wallArmTexture,
//     normalMap: wallNormalTexture,
//   })
// );
// walls.position.y = 1.25;
// house.add(walls);

// // roof
// const roof = new THREE.Mesh(
//   new THREE.ConeGeometry(3.5, 1.5, 4),
//   new THREE.MeshStandardMaterial({
//     map: roofColorTexture,
//     aoMap: roofArmTexture,
//     metalnessMap: roofArmTexture,
//     roughnessMap: roofArmTexture,
//     normalMap: roofNormalTexture,
//   })
// );
// roof.position.y = 2.5 + 0.75;
// roof.rotation.y = Math.PI * 0.25;
// house.add(roof);

// // door
// const door = new THREE.Mesh(
//   new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
//   new THREE.MeshStandardMaterial({
//     map: doorColorTexture,
//     transparent: true,
//     alphaMap: doorAlphaTexture,
//     aoMap: doorAmbientTexture,
//     displacementMap: doorHeightTexture,
//     normalMap: doorNormalTexture,
//     metalnessMap: doorMetalnessTexture,
//     roughnessMap: doorRoughnessTexture,
//     displacementScale: 0.15,
//     displacementBias: -0.04,
//   })
// );
// door.position.y = 1;
// door.position.z = 2 + 0.01;
// house.add(door);

// // Tree
// const tree = new THREE.Group();
// scene.add(tree);
// // stem
// const stem = new THREE.Mesh(
//   new THREE.CapsuleGeometry(0.1, 2, 4, 8),
//   new THREE.MeshStandardMaterial({ map: doorColorTexture })
// );
// stem.position.set(-2, 1, 5);
// tree.add(stem);
// // leaves
// const leaf = new THREE.Mesh(
//   new THREE.SphereGeometry(1, 16, 16),
//   new THREE.MeshStandardMaterial({
//     color: "#ccffcc",
//     map: bushColorTexture,
//     aoMap: bushArmTexture,
//     metalnessMap: bushArmTexture,
//     roughness: bushArmTexture,
//     normalMap: bushNormalTexture,
//   })
// );
// leaf.scale.set(0.6, 0.6, 0.6);
// leaf.position.set(-2, 2, 5);
// leaf.rotation.x = 2;
// tree.add(leaf);
// // bushes
// const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
// const bushMaterial = new THREE.MeshStandardMaterial({
//   color: "#ccffcc",
//   map: bushColorTexture,
//   aoMap: bushArmTexture,
//   metalnessMap: bushArmTexture,
//   roughness: bushArmTexture,
//   normalMap: bushNormalTexture,
// });

// const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
// bush1.scale.setScalar(0.5);
// bush1.position.set(0.8, 0.2, 2.2);
// bush1.rotation.x = -0.75;

// const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
// bush2.scale.set(0.25, 0.25, 0.25);
// bush2.position.set(1.4, 0.2, 2.1);
// bush2.rotation.x = -0.75;

// const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
// bush3.scale.set(0.3, 0.3, 0.3);
// bush3.position.set(-0.8, 0.1, 2.2);
// bush3.rotation.x = -0.75;

// const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
// bush4.scale.set(0.15, 0.15, 0.15);
// bush4.position.set(-1, 0.05, 2.6);
// bush4.rotation.x = -0.75;

// house.add(bush1, bush2, bush3, bush4);

// // Grave

// const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
// const graveMaterial = new THREE.MeshStandardMaterial({
//   map: graveColorTexture,
//   aoMap: graveArmTexture,
//   roughnessMap: graveArmTexture,
//   metalnessMap: graveArmTexture,
//   normalMap: graveNormalTexture,
// });

// const graves = new THREE.Group();
// scene.add(graves);

// for (let i = 0; i < 30; i++) {
//   const angle = Math.random() * Math.PI * 2;
//   const radius = 3 + Math.random() * 4;
//   const x = Math.sin(angle) * radius;
//   const z = Math.cos(angle) * radius;

//   //   mesh
//   const grave = new THREE.Mesh(graveGeometry, graveMaterial);
//   grave.position.x = x;
//   grave.position.y = Math.random() * 0.4;
//   grave.position.z = z;
//   grave.rotation.x = (Math.random() - 0.5) * 0.4;
//   grave.rotation.y = (Math.random() - 0.5) * 0.4;
//   grave.rotation.z = (Math.random() - 0.5) * 0.4;
//   //   add to graves

//   graves.add(grave);
// }

// /**
//  * Lights
//  */
// // Ambient light
// const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
// gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
// scene.add(ambientLight);

// // Directional light
// const directionalLight = new THREE.DirectionalLight("#86cdff", 1);
// directionalLight.position.set(3, 2, -8);

// scene.add(directionalLight);

// // door Light
// const doorLight = new THREE.PointLight("#ff7d46");

// doorLight.position.set(0, 2.2, 2.5);
// gui.add(doorLight, "intensity").min(0).max(1).step(0.01);
// house.add(doorLight);

// // ghost
// const ghost1 = new THREE.PointLight("#8800ff", 4);
// const ghost2 = new THREE.PointLight("#ff0088", 4);
// const ghost3 = new THREE.PointLight("#ff0000", 4);
// scene.add(ghost1, ghost2, ghost3);

// /**
//  * Sizes
//  */
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight,
// };

// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   // Update camera
//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   // Update renderer
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
// camera.position.x = 4;
// camera.position.y = 2;
// camera.position.z = 5;
// scene.add(camera);

// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// // Cast and receive shadow

// directionalLight.castShadow = true;
// ghost1.castShadow = true;
// ghost2.castShadow = true;
// ghost3.castShadow = true;

// walls.castShadow = true;
// walls.receiveShadow = true;

// roof.castShadow = true;
// floor.receiveShadow = true;

// for (const grave of graves.children) {
//   grave.castShadow = true;
//   grave.receiveShadow = true;
// }

// directionalLight.shadow.mapSize.width = 256;
// directionalLight.shadow.mapSize.height = 256;
// directionalLight.shadow.camera.top = 8;
// directionalLight.shadow.camera.bottom = -8;
// directionalLight.shadow.camera.left = -8;
// directionalLight.shadow.camera.right = 8;
// directionalLight.shadow.camera.near = 1;
// directionalLight.shadow.camera.far = 20;

// ghost1.shadow.mapSize.width = 256;
// ghost1.shadow.mapSize.height = 256;
// ghost1.shadow.camera.far = 10;

// // Sky

// const sky = new Sky();
// sky.scale.setScalar(100);
// scene.add(sky);

// sky.material.uniforms["turbidity"].value = 10;
// sky.material.uniforms["rayleigh"].value = 3;
// sky.material.uniforms["mieCoefficient"].value = 0.1;
// sky.material.uniforms["mieDirectionalG"].value = 0.95;
// sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

// // fog

// scene.fog = new THREE.FogExp2("#0c343f", 0.1);

// /*
// Shadows
// */
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// /**
//  * Animate
//  */
// const timer = new Timer();

// const tick = () => {
//   // Timer
//   timer.update();
//   const elapsedTime = timer.getElapsed();

//   // ghost
//   const ghost1Angle = elapsedTime * 0.5;
//   ghost1.position.x = Math.cos(ghost1Angle) * 7;
//   ghost1.position.z = Math.sin(ghost1Angle) * 7;
//   ghost1.position.y =
//     Math.sin(ghost1Angle) *
//     Math.sin(ghost1Angle * 2.34) *
//     Math.sin(ghost1Angle * 3.1);

//   // ghost2    //
//   const ghost2Angle = -elapsedTime * 0.38;
//   ghost2.position.x = Math.cos(ghost2Angle) * 5;
//   ghost2.position.z = Math.sin(ghost2Angle) * 5;
//   ghost2.position.y =
//     Math.sin(ghost1Angle) *
//     Math.sin(ghost1Angle * 2.34) *
//     Math.sin(ghost1Angle * 3.1);

//   // ghost 3

//   const ghost3Angle = elapsedTime * 0.4;
//   ghost3.position.x = Math.sin(ghost3Angle) * 6;
//   ghost3.position.z = Math.cos(ghost3Angle) * 6;
//   ghost3.position.y =
//     Math.sin(ghost3Angle) *
//     Math.sin(ghost3Angle * 2.13) *
//     Math.sin(ghost3Angle * 3);

//   // Update controls
//   controls.update();

//   // Render
//   renderer.render(scene, camera);

//   // Call tick again on the next frame
//   window.requestAnimationFrame(tick);
// };

// tick();

/**
 *
 * THIS IS JUST A PRACTICE-----------------------------------------------
 */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sky } from "three/addons/objects/Sky.js";
import { Timer } from "three/addons/misc/Timer.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/* 
Textures
*/
const textureLoader = new THREE.TextureLoader();

// floorTextures
const floorAlphaTexture = textureLoader.load("./floor/alpha.webp");
const floorColorTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp"
);
const floorArmTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp"
);
const floorNormalTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg"
);
const floorDisplacementTexture = textureLoader.load(
  "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg"
);

floorColorTexture.colorSpace = THREE.SRGBColorSpace;

floorColorTexture.repeat.set(8, 8);
floorArmTexture.repeat.set(8, 8);
floorNormalTexture.repeat.set(8, 8);
floorDisplacementTexture.repeat.set(8, 8);

floorColorTexture.wrapS = THREE.RepeatWrapping;
floorColorTexture.wrapT = THREE.RepeatWrapping;

floorArmTexture.wrapS = THREE.RepeatWrapping;
floorArmTexture.wrapT = THREE.RepeatWrapping;

floorNormalTexture.wrapS = THREE.RepeatWrapping;
floorNormalTexture.wrapT = THREE.RepeatWrapping;

floorDisplacementTexture.wrapS = THREE.RepeatWrapping;
floorDisplacementTexture.wrapT = THREE.RepeatWrapping;

/**
 * House
 */
// Temporary sphere

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20, 100, 100),
  new THREE.MeshStandardMaterial({
    transparent: true,
    alphaMap: floorAlphaTexture,
    map: floorColorTexture,
    aoMap: floorArmTexture,
    roughnessMap: floorArmTexture,
    metalnessMap: floorArmTexture,
    normalMap: floorNormalTexture,
    displacementMap: floorDisplacementTexture,
    displacementScale: 0.3,
    displacementBias: -0.2,
  })
);

// Wall
const wallArmTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"
);
const wallColorTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"
);
const wallNormalTexture = textureLoader.load(
  "./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg"
);
wallColorTexture.colorSpace = THREE.SRGBColorSpace;

// floor
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

gui
  .add(floor.material, "displacementScale")
  .min(0)
  .max(1)
  .step(0.001)
  .name("floorDisplacementScale");
gui
  .add(floor.material, "displacementBias")
  .min(-1)
  .max(1)
  .step(0.001)
  .name("floorDisplacementBias");

const house = new THREE.Group();
scene.add(house);

// roof
const roofArmTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg"
);
const roofColorTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg"
);
const roofNormalTexture = textureLoader.load(
  "./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg"
);
roofColorTexture.colorSpace = THREE.SRGBColorSpace;

roofColorTexture.repeat.set(3, 1);
roofArmTexture.repeat.set(3, 1);
roofNormalTexture.repeat.set(3, 1);

roofColorTexture.wrapS = THREE.RepeatWrapping;
roofArmTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;

// Bushes

const bushColorTexture = textureLoader.load(
  "./bushes/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.jpg"
);
const bushArmTexture = textureLoader.load(
  "./bushes/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.jpg"
);
const bushNormalTexture = textureLoader.load(
  "./bushes/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.jpg"
);
bushColorTexture.colorSpace = THREE.SRGBColorSpace;

bushColorTexture.repeat.set(2, 1);
bushArmTexture.repeat.set(2, 1);
bushNormalTexture.repeat.set(2, 1);

bushColorTexture.wrapS = THREE.RepeatWrapping;
bushNormalTexture.wrapS = THREE.RepeatWrapping;
bushArmTexture.wrapS = THREE.RepeatWrapping;

// graves

const graveColorTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.jpg"
);
const graveArmTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.jpg"
);
const graveNormalTexture = textureLoader.load(
  "./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.jpg"
);
graveColorTexture.colorSpace = THREE.SRGBColorSpace;

graveColorTexture.repeat.set(0.3, 0.4);
graveArmTexture.repeat.set(0.3, 0.4);
graveNormalTexture.repeat.set(0.3, 0.4);

graveColorTexture.wrapS = THREE.RepeatWrapping;
graveArmTexture.wrapS = THREE.RepeatWrapping;
graveNormalTexture.wrapS = THREE.RepeatWrapping;

// door

const doorColorTexture = textureLoader.load("./door/color.webp");
const doorAlphaTexture = textureLoader.load("./door/alpha.webp");
const doorAmbientTexture = textureLoader.load("./door/ambientOcclusion.webp");
const doorHeightTexture = textureLoader.load("./door/height.webp");
const doorMetalnessTexture = textureLoader.load("./door/metalness.webp");
const doorNormalTexture = textureLoader.load("./door/normal.webp");
const doorRoughnessTexture = textureLoader.load("./door/roughness.webp");

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

// walls

const walls = new THREE.Mesh(
  new THREE.BoxGeometry(8, 3, 4),
  new THREE.MeshStandardMaterial({
    map: wallColorTexture,
    aoMap: wallArmTexture,
    roughnessMap: wallArmTexture,
    metalnessMap: wallArmTexture,
    normalMap: wallNormalTexture,
  })
);
walls.position.y = 1.5;
house.add(walls);

const wall2 = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.5, 4),
  new THREE.MeshStandardMaterial({
    map: wallColorTexture,
    aoMap: wallArmTexture,
    roughnessMap: wallArmTexture,
    metalnessMap: wallArmTexture,
    normalMap: wallNormalTexture,
  })
);
wall2.position.y = 4 + 0.25;
wall2.position.x = -2;

house.add(wall2);

// air ballon1
const ballon1 = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: "#000000" })
);
ballon1.scale.setScalar(0.15);
ballon1.position.set(-2, 4, 0);

scene.add(ballon1);

// ballon2
const ballon2 = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: "#000000" })
);
ballon2.scale.setScalar(0.15);
ballon2.position.set(-2, 2, 0);

scene.add(ballon2);

// roof
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1.5, 4),
  new THREE.MeshStandardMaterial({
    map: roofColorTexture,
    aoMap: roofArmTexture,
    metalnessMap: roofArmTexture,
    roughnessMap: roofArmTexture,
    normalMap: roofNormalTexture,
  })
);
roof.position.y = 6 + 0.25;
roof.position.x = -2;
roof.rotation.y = Math.PI * 0.25;
house.add(roof);

// door
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientTexture,
    displacementMap: doorHeightTexture,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
    displacementScale: 0.15,
    displacementBias: -0.04,
  })
);
door.position.y = 1;
door.position.z = 2 + 0.01;
door.position.x = -2;

// door 2

const door2 = new THREE.Mesh(
  new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientTexture,
    displacementMap: doorHeightTexture,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
    displacementScale: 0.15,
    displacementBias: -0.04,
  })
);
door2.position.set(0, 4, 0);
door2.rotation.y = Math.PI * 0.5;

house.add(door);
house.add(door2);

// Tree
const tree = new THREE.Group();
scene.add(tree);
// stem
const stem = new THREE.Mesh(
  new THREE.CapsuleGeometry(0.1, 2, 4, 8),
  new THREE.MeshStandardMaterial({ map: doorColorTexture })
);
stem.position.set(-2, 1, 5);
tree.add(stem);
// leaves
const leaf = new THREE.Mesh(
  new THREE.SphereGeometry(1, 16, 16),
  new THREE.MeshStandardMaterial({
    color: "#ccffcc",
    map: bushColorTexture,
    aoMap: bushArmTexture,
    metalnessMap: bushArmTexture,
    roughness: bushArmTexture,
    normalMap: bushNormalTexture,
  })
);
leaf.scale.set(0.6, 0.6, 0.6);
leaf.position.set(-2, 2, 5);
leaf.rotation.x = 2;
tree.add(leaf);
// bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
  color: "#ccffcc",
  map: bushColorTexture,
  aoMap: bushArmTexture,
  metalnessMap: bushArmTexture,
  roughness: bushArmTexture,
  normalMap: bushNormalTexture,
});

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.setScalar(0.5);
bush1.position.set(0.8, 0.2, 2.2);
bush1.rotation.x = -0.75;

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.set(0.25, 0.25, 0.25);
bush2.position.set(1.4, 0.2, 2.1);
bush2.rotation.x = -0.75;

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.3, 0.3, 0.3);
bush3.position.set(-0.8, 0.1, 2.2);
bush3.rotation.x = -0.75;

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(-1, 0.05, 2.6);
bush4.rotation.x = -0.75;

house.add(bush1, bush2, bush3, bush4);

// Grave

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveColorTexture,
  aoMap: graveArmTexture,
  roughnessMap: graveArmTexture,
  metalnessMap: graveArmTexture,
  normalMap: graveNormalTexture,
});

const graves = new THREE.Group();
scene.add(graves);

for (let i = 0; i < 30; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 3 + Math.random() * 4;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  //   mesh
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);
  grave.position.x = x;
  grave.position.y = Math.random() * 0.4;
  grave.position.z = z;
  grave.rotation.x = (Math.random() - 0.5) * 0.4;
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  grave.rotation.z = (Math.random() - 0.5) * 0.4;
  //   add to graves

  graves.add(grave);
}

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#86cdff", 0.275);
gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight("#86cdff", 1);
directionalLight.position.set(3, 2, -8);

scene.add(directionalLight);

// door Light
const doorLight = new THREE.PointLight("#ff7d46");

doorLight.position.set(0, 2.2, 2.5);
gui.add(doorLight, "intensity").min(0).max(1).step(0.01);
house.add(doorLight);

// ghost
const ghost1 = new THREE.PointLight("#8800ff", 4);
const ghost2 = new THREE.PointLight("#ff0088", 4);
const ghost3 = new THREE.PointLight("#ff0000", 4);
scene.add(ghost1, ghost2, ghost3);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 10;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Cast and receive shadow

directionalLight.castShadow = true;
ghost1.castShadow = true;
ghost2.castShadow = true;
ghost3.castShadow = true;

walls.castShadow = true;
walls.receiveShadow = true;

roof.castShadow = true;
floor.receiveShadow = true;

for (const grave of graves.children) {
  grave.castShadow = true;
  grave.receiveShadow = true;
}

directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;

ghost1.shadow.mapSize.width = 256;
ghost1.shadow.mapSize.height = 256;
ghost1.shadow.camera.far = 10;

// Sky

const sky = new Sky();
sky.scale.setScalar(100);
scene.add(sky);

sky.material.uniforms["turbidity"].value = 10;
sky.material.uniforms["rayleigh"].value = 3;
sky.material.uniforms["mieCoefficient"].value = 0.1;
sky.material.uniforms["mieDirectionalG"].value = 0.95;
sky.material.uniforms["sunPosition"].value.set(0.3, -0.038, -0.95);

// fog

scene.fog = new THREE.FogExp2("#0c343f", 0.1);

/*
Shadows
*/
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

/**
 * Animate
 */
const timer = new Timer();

const tick = () => {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // ballon1
  const ballonAngle = elapsedTime * 0.5;
  ballon1.position.x = Math.cos(ballonAngle) * 5;
  ballon1.position.z = Math.sin(ballonAngle) * 5;

  // ballon2
  ballon2.position.x = Math.sin(ballonAngle) * 7;
  ballon2.position.z = Math.cos(ballonAngle) * 7;
  ballon2.position.y = Math.sin(ballonAngle) * 2;

  // ghost
  const ghost1Angle = elapsedTime * 0.5;
  ghost1.position.x = Math.cos(ghost1Angle) * 7;
  ghost1.position.z = Math.sin(ghost1Angle) * 7;
  ghost1.position.y =
    Math.sin(ghost1Angle) *
    Math.sin(ghost1Angle * 2.34) *
    Math.sin(ghost1Angle * 3.1);

  // ghost2    //
  const ghost2Angle = -elapsedTime * 0.38;
  ghost2.position.x = Math.cos(ghost2Angle) * 5;
  ghost2.position.z = Math.sin(ghost2Angle) * 5;
  ghost2.position.y =
    Math.sin(ghost1Angle) *
    Math.sin(ghost1Angle * 2.34) *
    Math.sin(ghost1Angle * 3.1);

  // ghost 3

  const ghost3Angle = elapsedTime * 0.4;
  ghost3.position.x = Math.sin(ghost3Angle) * 6;
  ghost3.position.z = Math.cos(ghost3Angle) * 6;
  ghost3.position.y =
    Math.sin(ghost3Angle) *
    Math.sin(ghost3Angle * 2.13) *
    Math.sin(ghost3Angle * 3);

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
