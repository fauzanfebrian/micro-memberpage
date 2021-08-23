import React, { useState } from "react";

export { default as Item } from "./Item";

export { default as ICPlay } from "src/assets/btn_play.svg";
export { default as ICLock } from "src/assets/ic_lock.svg";

export default function Accordion({ children }) {
  const [active, setActive] = useState(null);
  const toggle = (id) => setActive((prev) => (prev === id ? null : id));
  return <div className="accordion">{children(active, toggle)}</div>;
}
