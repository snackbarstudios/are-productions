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
          slug
          text
          companyEmail
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

  const {
    slug,
    title,
    text,
    companyEmail,
    contactDetails
  } = datoCmsContactSection;

  return (
    <section
      id={slug}
      sx={{
        mt: [6, null, null],
        mb: [4, null, null],
        textAlign: "center",
        width: "100%"
      }}
    >
      <p>{text}</p>
      <Styled.h1>{title}</Styled.h1>
      <div
        sx={{
          my: [4, 6, null],
          height: "auto",
          display: "flex",
          width: "100%",
          flexDirection: ["column", "row", null],
          justifyContent: "center"
        }}
      >
        {contactDetails.map(({ name, email, phone, image }, index) => {
          return (
            <div key={index} sx={{ mx: [null, 4, null], width: "300px" }}>
              <div
                sx={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  mb: [4, null, null],
                  margin: "0 auto"
                }}
              >
                <Image image={image[0].fluid} />
              </div>
              <hr
                sx={{
                  border: "0",
                  height: "1px",
                  color: "primary",
                  backgroundColor: "primary",
                  mt: 5,
                  mx: "60px",
                  width: "180px"
                }}
              />

              <p
                sx={{
                  mt: 4
                }}
              >
                {name}
              </p>
              <a
                sx={{
                  color: "primary",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "block"
                }}
                href={`mailto:${email}`}
              >
                {email}
              </a>
              <br />
              <a
                sx={{
                  color: "text",
                  textDecoration: "none",
                  display: "block"
                }}
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            </div>
          );
        })}
      </div>
      <a
        sx={{
          color: "primary",
          fontWeight: "bold",
          textDecoration: "none",
          display: "block"
        }}
        href={`mailto:${companyEmail}`}
      >
        {companyEmail}
      </a>
    </section>
  );
};

export default ContactSection;
