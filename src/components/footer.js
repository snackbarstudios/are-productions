/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  return <footer>© {new Date().getFullYear()}, Snackbar Studios</footer>;
};

export default Footer;
