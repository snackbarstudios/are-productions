/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const AboutSection = () => {
  const { datoCmsAboutSection } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutSection {
          slug
          sectionTitle
          text {
            paragraphText
          }
        }
      }
    `
  );

  const { slug, text, sectionTitle } = datoCmsAboutSection;

  return (
    <section
      id={slug}
      sx={{
        pt: [4, 5, null],
        display: "flex",
        flexDirection: ["column", "row", null]
      }}
    >
      <Styled.h1
        sx={{
          flex: 1,
          mr: 5,
          wordSpacing: "100vw"
        }}
      >
        {sectionTitle}
      </Styled.h1>
      <div
        sx={{
          flex: 2,
          mt: 4
        }}
      >
        {text.map(({ paragraphText }, index) => (
          <p key={index}>{paragraphText}</p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
