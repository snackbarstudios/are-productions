/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import "typeface-raleway";
import "typeface-roboto";

const IndexPage = ({ data }) => {
  const title = data.allDatoCmsHeroBanner.edges[0].node.heroText;
  return (
    <Layout>
      <SEO title="Home" />
      <p sx={{ fontFamily: "heading" }}>{title}</p>
      <p sx={{ fontFamily: "body" }}>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allDatoCmsHeroBanner {
      edges {
        node {
          heroText
        }
      }
    }
  }
`;
