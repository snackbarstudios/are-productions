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
  console.log(fluid);

  return (
    <BackgroundImage
      Tag="section"
      fluid={fluid}
      backgroundColor={`#000`}
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundAttachment: "fixed",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        // backgroundAttachment: "scroll",
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
    // <div
    //   sx={{
    //     backgroundImage: `url(${fluid.src})`,
    //     minHeight: "100vh",
    //     width: "100%",
    //     backgroundAttachment: "fixed",
    //     backgroundPosition: "right bottom",
    //     backgroundAttachment: "scroll",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     // oBackgroundSize: "cover",
    //     // mozBackgroundSize: "cover",
    //     position: "relative",
    //     overflow: "hidden",
    //     "-o-background-size": "cover"
    //   }}

    //   //       -o-background-size:cover,
    //   // -moz-background-size:cover;
    //   // -webkit-background-size:cover; -webkit-line-clamp: 4;
    //   // `)}
    // >
    //   <div
    //     sx={{
    //       position: "absolute",
    //       textAlign: "center",
    //       top: "50%",
    //       left: "50%",
    //       transform: "translate(-50%, -50%)"
    //     }}
    //   >
    //     <SVG />
    //   </div>
    // </div>
  );
};

export default HeroImage;
