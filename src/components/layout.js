/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";

import Footer from "../components/footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: [
            "0 1.0875rem 1.45rem",
            "0 1.0875rem 1.45rem",
            "0 3.0875rem 1.45rem"
          ]
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
