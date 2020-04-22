/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Fragment } from "react";
import Image from "./image";

const LogoWrapper = ({ children }) => (
  <div
    sx={{
      width: "100%",
      position: "absolute",
      textAlign: "center",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {children}
  </div>
);

const HeroImage = () => {
  const { allDatoCmsHeroBanner, datoCmsLogo } = useStaticQuery(
    graphql`
      query {
        allDatoCmsHeroBanner {
          edges {
            node {
              heroImage {
                fluid(maxWidth: 1600) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
        datoCmsLogo {
          logoDesktop {
            fluid(maxWidth: 1600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );

  const { logoDesktop } = datoCmsLogo;

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
        <LogoWrapper>
          <div
            sx={{
              height: "350px",
              width: "400px",
              margin: "0 auto"
            }}
          >
            <Image image={logoDesktop.fluid} />
          </div>
        </LogoWrapper>
      </BackgroundImage>

      <BackgroundImage
        Tag="section"
        fluid={fluid}
        backgroundColor={`#000`}
        sx={backgroundStyling("mobile")}
      >
        <LogoWrapper>
          <div
            sx={{
              height: "350px",
              width: ["250px", "300px"],
              margin: "0 auto"
            }}
          >
            <Image image={logoDesktop.fluid} />
          </div>
        </LogoWrapper>
      </BackgroundImage>
    </Fragment>
  );
};

export default HeroImage;
