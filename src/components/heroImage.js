/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import SVG from "../components/svg";
import { Fragment } from "react";

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
  console.log(fluid);

  const backgroundStyling = action => {
    let props = {};
    switch (action) {
      case "desktop":
        props.display = ["none", null, "block"];
        props.backgroundAttachment = "fixed";
        break;
      case "mobile":
        props.display = ["block", null, "none"];
        props.backgroundAttachment = "scroll";
        break;

      default:
    }
    return {
      display: ["none", null, "block"],
      minHeight: "100vh",
      width: "100%",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden",
      ...props
    };
  };

  return (
    <Fragment>
      <BackgroundImage
        Tag="section"
        fluid={fluid}
        backgroundColor={`#000`}
        sx={backgroundStyling("desktop")}
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
      <BackgroundImage
        Tag="section"
        fluid={fluid}
        backgroundColor={`#000`}
        sx={backgroundStyling("mobile")}
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
    </Fragment>
  );
};

export default HeroImage;
