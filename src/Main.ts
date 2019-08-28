
class Main  {

    private _canvas:HTMLCanvasElement;
    private _engine:BABYLON.Engine;
    private _scene:BABYLON.Scene;

    public constructor(canvas:HTMLCanvasElement) {
        this._canvas = canvas;
        this._engine = new BABYLON.Engine(this._canvas, true);
        this.createScene();
        this.runRenderLoop();
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    /**
     * 创建babylon场景
     */
    private createScene(){
        this._scene = new BABYLON.Scene(this._engine);

        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), this._scene);
        camera.attachControl(this._canvas, true);

        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this._scene);
        var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), this._scene);
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, this._scene);
    }

    private onWindowResize(){
         this._engine.resize();
    }

    private runRenderLoop(){
        this._engine.runRenderLoop(function () { 
                this._scene.render();
        }.bind(this));
    }
}