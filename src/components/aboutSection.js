/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const AboutSection = () => {
  const { datoCmsAboutSection } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutSection {
          title
          text {
            paragraphText
          }
        }
      }
    `
  );

  const { title, text } = datoCmsAboutSection;

  return (
    <section
      sx={{
        my: [3, 5, null],
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
        {title}
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

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
