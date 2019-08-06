import { ArcRotateCamera, Engine, HemisphericLight, Mesh, MeshBuilder, Scene, Vector3 } from "babylonjs";

const canvas: any = document.getElementById("renderCanvas");
const engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
    const createdScene: Scene = new Scene(engine);

    const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2,
                                                        Vector3.Zero(), createdScene);
    camera.attachControl(canvas, true);

    const light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), createdScene);

    const sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, createdScene);

    return createdScene;
}

const scene: Scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
