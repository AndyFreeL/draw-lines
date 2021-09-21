import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas = null

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

    clearCanvas() {
        let ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default new CanvasState();