import React from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import "./CustomDraggable.scss";
export default function CustomDraggable(props: any) {
  let onStart = (e: MouseEvent) => {
    let elems: any = document.getElementsByClassName("focusable");
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].style.zIndex === "9") elems[i].style.zIndex = 1;
      (e as any).currentTarget.style.zIndex = 9;
    }
  };
  let preventOutofScreenDrag = (e: MouseEvent) => {
    if (
      e.clientY <= 0 ||
      e.clientX <= 0 ||
      e.clientX >= window.innerWidth ||
      e.clientY >= window.innerHeight
    ) {
      return false;
    }
  };
  let focusable = props?.focusable ?? true;
  return (
    <Draggable
      onMouseDown={focusable ? onStart : undefined}
      {...props}
      onDrag={preventOutofScreenDrag as DraggableEventHandler}
    >
      <div className={focusable ? "focusable" : "unfocusable"}>
        {props.children}
      </div>
    </Draggable>
  );
}
