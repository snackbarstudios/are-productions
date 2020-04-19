/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Layout from "../components/layout";
import HeroImage from "../components/heroImage";
import SEO from "../components/seo";
import "typeface-raleway";
import "typeface-roboto";
import Header from "../components/header";
import AboutSection from "../components/aboutSection";
import ContactSection from "../components/contactsection";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <HeroImage />
      <Layout>
        <SEO title="Home" />
        <AboutSection />
        {/* <Projects /> */}
        <ContactSection />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
