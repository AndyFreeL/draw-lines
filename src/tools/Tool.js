export default class Tool{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx =canvas.getContext('2d');
        this.destroyListener();
    }

    destroyListener(){
        this.canvas.onmousedown = null;
        this.canvas.onmousemove = null;
        this.canvas.onmouseup = null;
    }
}
