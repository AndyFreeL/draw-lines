import React, {useEffect, useRef} from 'react';
import s from './Canvas.module.css'
import {observer} from "mobx-react-lite";
import canvasState from "../../store/canvasState";
import toolState from '../../store/toolState';
import Line from "../../tools/Line";

const Canvas = observer(() => {
    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Line(canvasRef.current));
    }, []);

    return (
        <div className={s.canvas}>
            <canvas ref={canvasRef} className={s.drawPanel} width={1000} height={800}/>
        </div>
    );
});

export default Canvas;