import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import { ICArrowDown } from "src/assets";

export default function Item({ name, id, child, active, toggle, children }) {
  const [Height, setHeight] = useState(0);
  const calcHeight = (e) => setHeight(e.offsetHeight);
  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <div className="meta pl-4 py-2 relative flex justify-between items-center">
        <span className="text-gray-600">{name}</span>
        <button
          className="link-wrapped pr-5 focus:outline-none"
          onClick={() => toggle(id)}
        >
          {child && child.length > 0 && (
            <ICArrowDown
              className={[
                "transition-all duration-300 transform",
                active === id ? "rotate-0" : "rotate-180",
              ].join(" ")}
            />
          )}
        </button>
      </div>
      <div
        className="transition-all duration-500"
        style={{ height: active === id ? Height : 0 }}
      >
        <CSSTransition
          in={active === id}
          timeout={500}
          onEnter={calcHeight}
          classNames="accordion-item"
        >
          <div className="accordion-item py-2 bg-gray-100">{children}</div>
        </CSSTransition>
      </div>
    </div>
  );
}
