/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import FsLightbox from "fslightbox-react";

const Projects = () => {
  const [toggler, setToggler] = useState(false);
  const { datoCmsVideoSection } = useStaticQuery(
    graphql`
      query {
        datoCmsVideoSection {
          video {
            id
            title
            videoLink
            placeholderImage {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );
  console.log(datoCmsVideoSection.video[0].videoLink);
  return (
    <section>
      {datoCmsVideoSection.video.map(videos => (
        <div sx={{ display: "flex" }}>
          <article sx={{ width: "10%", position: "relative" }}>
            <h4
              sx={{
                ":before, :after": {
                  content: "-",
                  display: "block",
                  borderBottom: "2px solid red"
                },
                whiteSpace: "nowrap",
                position: "absolute",
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
                transform: "rotate(90deg) translate(-50%, -50%)",
                fontWeight: "400",
                textTransform: "uppercase"
              }}
            >
              {videos.title}
            </h4>
          </article>
          <article sx={{ width: "90%" }}>
            <BackgroundImage
              Tag="section"
              key={videos.title}
              fluid={videos.placeholderImage.fluid}
              onClick={() => setToggler(true)}
              backgroundColor={`#000`}
              sx={{
                minHeight: "400px",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            ></BackgroundImage>
            <FsLightbox
              toggler={toggler}
              customSources={[
                <iframe
                  src={videos.videoLink}
                  title={videos.title}
                  width="1920px"
                  height="1080px"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ]}
            />
          </article>
        </div>
      ))}
    </section>
  );
};

export default Projects;
