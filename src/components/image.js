import React from "react";
import Img from "gatsby-image";

const Image = ({ image }) => {
  return <Img fluid={image} sx={{ height: "100%", width: "100%" }} />;
};

export default Image;
