var scene,
    camera,
    rendener;

// 场景的初始化
function init() {
    scene = new THREE.Scene(); // 场景

    // 透视相机 远近高低各不同 
    camera = new THREE.PerspectiveCamera(
        90, 
        document.body.clientWidth/document.body.clientHeight,
        0.1,
        100
    );
    camera.position.set(0, 0, 3);
    // opengl 在web的实现 3d 图形 计算机图形学
    renderer = new THREE.WebGLRenderer({
        antialias: true  //优化， 抗锯齿
    });
    renderer.setSize(
        document.body.clientWidth,
        document.body.clientHeight
    )
    document
        .getElementById('container')
        .appendChild(renderer.domElement)
    
    loadCarModal();
        loop();

}

function loadCarModal() {
    // 100 mb 加一个loader.js 
    const loader = new THREE.GLTFLoader();
    loader.load(
        './images/model.gltf', //设计师
        function(gltf) {
            //成功加载后
            scene.add(gltf.scene);
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded')
        },
        function(error) {
            console.log('An error happened')
        }
    )
}

function loop() {
    // 显卡的显示频率
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
}
window.onload = init;
