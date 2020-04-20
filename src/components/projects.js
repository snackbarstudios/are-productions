/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Lightbox from "./lightbox";

const Projects = () => {
  const { datoCmsVideoSection, allDatoCmsProject } = useStaticQuery(
    graphql`
      query {
        datoCmsVideoSection {
          slug
          sectionTitle
        }
        allDatoCmsProject {
          edges {
            node {
              id
              title
              videos {
                videoUrl
                placeholderImage {
                  fluid {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <section
      id={datoCmsVideoSection.slug}
      sx={{
        my: [3, 5, null]
      }}
    >
      <Styled.h2 sx={{ textAlign: "center", textTransform: "uppercase" }}>
        {datoCmsVideoSection.sectionTitle}
      </Styled.h2>
      {allDatoCmsProject.edges.map(video => (
        <div key={video.node.id} sx={{ display: "flex" }}>
          <article sx={{ width: "10%", position: "relative" }}>
            <h4
              sx={{
                ":before, :after": {
                  content: '" "',
                  display: "block",
                  borderBottom: "1px solid #810904",
                  borderTop: "1px solid #810904",
                  margin: "0 20px 0 0",
                  flex: "1 0 20px"
                },
                ":after": {
                  margin: "0 0 0 20px"
                },
                whiteSpace: "nowrap",
                display: "flex",
                width: "400px",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transformOrigin: "0 0",
                transform: "rotate(-90deg) translate(-50%, -50%)",
                fontWeight: "400",
                textTransform: "uppercase"
              }}
            >
              {video.node.title}
            </h4>
          </article>
          <article
            sx={{
              ":hover": { cursor: "pointer" },
              width: "90%",
              marginY: "32px",
              display: "flex"
            }}
          >
            <div sx={{ display: "flex", width: "100%" }}>
              {video.node.videos.map(video => (
                <Lightbox key={video.videoUrl} video={video} />
              ))}
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Projects;
