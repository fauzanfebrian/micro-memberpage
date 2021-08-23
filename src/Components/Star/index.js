import propTypes from "prop-types";
import React from "react";
import { ICStar } from "src/assets";

function Star({ rating }) {
  const stars = [ICStar, ICStar, ICStar, ICStar, ICStar];
  return stars.map((Star, index) => (
    <Star
      className={`${
        index + 1 <= rating ?? 0 ? "fill-orange-200" : "fill-gray-200"
      } mr-2`}
      key={"star-" + index}
    />
  ));
}

Star.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Star;
