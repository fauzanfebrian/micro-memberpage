import propTypes from "prop-types";
import React from "react";

function Input({
  className,
  label,
  value,
  placeholder,
  onChange,
  type,
  name,
  error,
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className={[
            "text-lg mb-2",
            error ? "text-red-500" : "text-gray-900",
          ].join(" ")}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={[
          "border  py-3 px-6 text-lg mt-3 w-full outline-none ",
          error
            ? "border-red-500 text-red-500"
            : "border-gray-600 focus:border-teal text-gray-900",
        ].join(" ")}
        name={name}
      />
      {error && <span className="text-red pt-2">{error}</span>}
    </div>
  );
}
Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  error: propTypes.string,
};

export default Input;
