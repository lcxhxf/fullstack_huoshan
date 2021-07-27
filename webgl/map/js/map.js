class ChinaMap {
    constructor() {
        console.log('实例化')
        //统一方案 this指向
        this.cube = null // 属性
        this.init() // 执行流程的管理方法
    }

    init() {
        // 三个对象的实例过程放在这里
        //如果用let声明，函数结束后scene就被当垃圾回收了
        //let scene = new THREE.Scene();
        //第一步新建一个场景
        this.scene = new THREE.Scene()
        this.setCamera()
        this.setRenderer()

        const geometry = new THREE.BoxGeometry()
        //贴图换成六面贴颜色
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.render()
        this.animate()
        var controller = new THREE.OrbitControls(this.camera, this.renderer.domElement)
    }

    // 新建透视相机
    setCamera() {
        // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 5
    }

    // 设置渲染器
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        // 设置画布的大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //这里 其实就是canvas 画布  renderer.domElement
        document.body.appendChild(this.renderer.domElement)
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.render()
    }
    // 加载地图数据
    loadMapData() {
        const loader = new THREE.FileLoader()
        loader.load('../json/china.json', (data) => {
            const jsondata = JSON.parse(JSON.stringify(data))
        })
    }

}