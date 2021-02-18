import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "babylonjs";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
    const createdScene: Scene = new Scene(engine);

    const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2,
                                                        Vector3.Zero(), createdScene);
    camera.attachControl(canvas, true);

    new HemisphericLight("light1", new Vector3(1, 1, 0), createdScene);

    MeshBuilder.CreateSphere("sphere", { diameter: 1 }, createdScene);

    return createdScene;
}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
