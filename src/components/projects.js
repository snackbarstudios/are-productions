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
  const videoUrls = [];
  allDatoCmsProject.edges.forEach(video => {
    video.node.videos.forEach(vid => {
      videoUrls.push(vid.videoUrl);
    });
  });
  return (
    <section
      id={datoCmsVideoSection.slug}
      sx={{
        my: [3, 5, null]
      }}
    >
      <Styled.h2
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: "32px"
        }}
      >
        {datoCmsVideoSection.sectionTitle}
      </Styled.h2>
      {allDatoCmsProject.edges.map(video => (
        <div
          key={video.node.id}
          sx={{
            display: "flex",

            margin: ["32px 0", null],
            flexDirection: ["column", "row"]
          }}
        >
          <article sx={{ width: ["100%", "10%"], position: "relative" }}> 
            <Styled.h4>{video.node.title}</Styled.h4>
          </article>
          <article
            sx={{
              ":hover": { cursor: "pointer" },
              width: ["100%"],
              marginY: "32px",
              display: "flex"
            }}
          >
            <div sx={{ display: "flex", width: "100%" }}>
              {video.node.videos.map((vid, index) => (
                <Lightbox
                  index={index}
                  key={video.videoUrl}
                  videoUrls={videoUrls}
                  videos={video.node.videos}
                />
              ))}
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Projects;
