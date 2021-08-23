import propTypes from "prop-types";
import React, { Children, useRef, useState } from "react";
import { useEffect } from "react";

function Select({
  labelName,
  id,
  name,
  value,
  className,
  children,
  onClick,
  fallbackText,
}) {
  const [toggle, setToggle] = useState(false);
  const selectWrapper = useRef(null);

  const items = Children.toArray(children);

  const toggleSelect = () => setToggle(!toggle);

  const clickOutside = (event) => {
    if (selectWrapper && !selectWrapper.current.contains(event.target))
      setToggle(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => window.removeEventListener("mousedown", clickOutside);
  }, []);

  const selected = items.find((item) => item.props.value === value);
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label htmlFor="" className="show text-lg text-gray-900 mb-2">
          {labelName}
        </label>
      )}
      <div className="relative" ref={selectWrapper} onClick={toggleSelect}>
        <div
          className={[
            "flex justify-between cursor-pointer focus:outline-none transition-all duration-200 border px-4 py-3 w-full",
            toggle ? "border-teal" : "border-gray-600",
            className,
          ].join(" ")}
        >
          <span className={value === "" ? "text-gray-500" : ""}>
            {selected?.props?.children ?? fallbackText}
          </span>
          <div className="transition-all duration-200 transform border-gray-600 border-b-2 border-r-2 rotate-45 translate-y-1 w-2 h-2" />
        </div>
        <div
          className={[
            "absolute bg-white left-0 border border-gray-600 py-3 w-full",
            toggle ? "" : "hidden",
          ].join(" ")}
        >
          {items.map((item, index) => {
            return (
              <div
                className="cursor-pointer px-4 py-1 bg-white hover:bg-gray-400 transition-all duration-200"
                onClick={() =>
                  onClick({ target: { name, value: item.props.value } })
                }
                key={index}
              >
                {item.props.children}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Select.propTypes = {
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  LabelName: propTypes.string,
  id: propTypes.string,
  className: propTypes.string,
  fallbackText: propTypes.string,
};

export default Select;
