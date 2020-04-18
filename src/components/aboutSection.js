/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

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
    <section>
      <Styled.h1>{title}</Styled.h1>
      {text.map(({ paragraphText }, index) => (
        <p key={index}>{paragraphText}</p>
      ))}
    </section>
  );
};

export default AboutSection;
