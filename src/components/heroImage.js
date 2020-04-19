/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import SVG from "../components/svg";

const HeroImage = () => {
  const { allDatoCmsHeroBanner } = useStaticQuery(
    graphql`
      query {
        allDatoCmsHeroBanner {
          edges {
            node {
              heroImage {
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const {
    node: {
      heroImage: { fluid }
    }
  } = allDatoCmsHeroBanner.edges[0];

  return (
    <BackgroundImage
      Tag="section"
      fluid={fluid}
      backgroundColor={`#000`}
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        sx={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <SVG />
      </div>
    </BackgroundImage>
  );
};

export default HeroImage;
