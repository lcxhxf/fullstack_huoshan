//把不同的工作 放到 不同的方法中
//this指向
class ChinaMap {
    constructor() {
        console.log('已经实例化');
        //统一方案
        this.cube = null; //属性
        this.init(); //执行流程的管理方法
    }

    init() {                                 
        //三个对象的实例化过程放在这里
        this.scene = new THREE.Scene()
        this.setCamera()
        this.setRenderer()
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.render()
        this.animate()
        var Controller = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    }

    setCamera() {
        // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          )
          //很精彩
          this.camera.position.z = 5;
        //   this.camera.position.x = -2;
        //   this.camera.position.y = -1;
    } 

    // 设置渲染器
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        // 设置画布的大小
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //这里 其实就是canvas 画布  renderer.domElement
        document.body.appendChild(this.renderer.domElement)

        
    }

    // // 设置环境光
    // setLight() {
    //     this.ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
    //     this.scene.add(ambientLight)
    //   }

      //render 方法 
    render() {
        this.renderer.render(this.scene, this.camera)
  }

    animate() {
        requestAnimationFrame(this.animate.bind(this))
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.render()
  }
  
  
}

