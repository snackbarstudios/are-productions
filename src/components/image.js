import React from "react";
import Img from "gatsby-image";

const Image = ({ image }) => {
  return <Img fluid={image} />;
};

export default Image;
