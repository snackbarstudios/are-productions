/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import SVG from "../components/svg";
import { Fragment } from "react";

const TextWrapper = ({ children }) => (
  <div
    sx={{
      position: "absolute",
      textAlign: "center",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {children}
  </div>
);

const Text = () => (
  <p
    sx={{
      textTransform: "uppercase",
      letterSpacing: "20px",
      fontWeight: "bold",
      color: "#777676",
      mt: "-40px",
      marginX: "auto",
      fontSize: ["18px"],
      pl: ["20px", 0]
    }}
  >
    PRODUCTIONS
  </p>
);

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
        <TextWrapper>
          <SVG />
          <Text />
        </TextWrapper>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        fluid={fluid}
        backgroundColor={`#000`}
        sx={backgroundStyling("mobile")}
      >
        <TextWrapper>
          <SVG />
          <Text />
        </TextWrapper>
      </BackgroundImage>
    </Fragment>
  );
};

export default HeroImage;
