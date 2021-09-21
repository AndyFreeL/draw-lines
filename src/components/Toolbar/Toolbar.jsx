import React from 'react';
import s from './Toolbar.module.css';
import toolState from '../../store/toolState';
import canvasState from "../../store/canvasState";
import Line from '../../tools/Line';
import Square from "../../tools/Square";

const Toolbar = () => {
    return (
        <div className={s.toolbar}>
            <button className={s.btn} onClick={() => toolState.setTool(new Line(canvasState.canvas))}>
                <div className={s.lineBtn}></div>
            </button>
            <button className={s.btn} onClick={() => toolState.setTool(new Square(canvasState.canvas))}>
                <div className={s.squareBtn}></div>
            </button>
            <button className={s.btn} onClick={() => canvasState.clearCanvas()}>
                <div>Clear</div>
            </button>
        </div>
    );
};

export default Toolbar;