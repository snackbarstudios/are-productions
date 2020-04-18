/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const ContactSection = () => {
  const { datoCmsContactSection } = useStaticQuery(
    graphql`
      query {
        datoCmsContactSection {
          title
          text
          contactDetails {
            phone
            name
            email
            image {
              fluid {
                base64
                tracedSVG
                width
                height
              }
            }
          }
        }
      }
    `
  );

  const { title, text, contactDetails } = datoCmsContactSection;
  console.log(datoCmsContactSection);


  return (
    <section>
      <p>{text}</p>
      <Styled.h1>{title}</Styled.h1>
      {contactDetails.map(({ name, email, phone }, index) => (
        <div key={index}>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      ))}
    </section>
  );
};

export default ContactSection;
