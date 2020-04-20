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
      <Styled.h2 sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: "32px" }}>
        {datoCmsVideoSection.sectionTitle}
      </Styled.h2>
      {allDatoCmsProject.edges.map(video => (
        <div key={video.node.id} sx={{ display: "flex", margin: ["32px 0", null], flexDirection: ["column", "row"] }}>
          <article sx={{ width: ["100%", "10%"], position: "relative" }}>
            <Styled.h4>
              {video.node.title}
            </Styled.h4>
          </article>
          <article
            sx={{
              ":hover": { cursor: "pointer" },
              width: ["100%", "90%"],
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
