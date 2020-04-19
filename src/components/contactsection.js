/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Image from "./image";

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
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );

  const { title, text, contactDetails } = datoCmsContactSection;

  return (
    <section>
      <p>{text}</p>
      <Styled.h1>{title}</Styled.h1>
      {contactDetails.map(({ name, email, phone, image }, index) => {
        console.log(image);
        return (
          <div key={index}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <Image image={image[0].fluid} />
          </div>
        );
      })}
    </section>
  );
};

export default ContactSection;
