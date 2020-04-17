/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Fragment } from "react";
import Layout from "../components/layout";
import HeroImage from "../components/heroImage";
import Image from "../components/image";
import SEO from "../components/seo";
import "typeface-raleway";
import "typeface-roboto";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <HeroImage />
      <Layout>
        <SEO title="Home" />
        <p sx={{ fontFamily: "body" }}>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
