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
          companyEmailEnding
          contactDetails {
            phone
            name
            email
            emailName
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
    contactDetails,
    companyEmailEnding
  } = datoCmsContactSection;

  return (
    <section
      id={slug}
      sx={{
        mmarginTop: [3, 5, null],
        textAlign: "center",
        width: "100%"
      }}
    >
      <p>{text}</p>
      <Styled.h2
        sx={{
          mb: 0
        }}
      >
        {title}
      </Styled.h2>
      <div
        sx={{
          height: "auto",
          display: "flex",
          width: "100%",
          flexDirection: ["column", "row", null],
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {contactDetails.map(
          ({ name, email, emailName, phone, image }, index) => {
            return (
              <div key={index} sx={{ width: "300px", mt: 5 }}>
                <div
                  sx={{
                    width: ["160px", "200px", null],
                    height: ["160px", "200px", null],
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: 4,
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
                    mt: [4, 5, null],
                    mx: "60px",
                    width: "180px"
                  }}
                />

                <p
                  sx={{
                    mt: 4,
                    mb: 0
                  }}
                >
                  {name}
                </p>
                <a
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    fontWeight: "heading",
                    my: 2,
                    ":hover": {
                      color: "primary"
                    }
                  }}
                  href={`mailto:${emailName}@${email}`}
                >
                  {emailName}
                  <span sx={{ color: "primary", fontWeight: "heading" }}>
                    @
                  </span>
                  {email}
                </a>
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
          }
        )}
      </div>
      <a
        sx={{
          mt: 6,
          mb: 3,
          color: "white",
          fontWeight: "heading",
          textDecoration: "none",
          display: "block",
          ":hover": {
            ":hover": {
              color: "primary"
            }
          }
        }}
        href={`mailto:${companyEmail}@${companyEmailEnding}`}
      >
        {companyEmail}
        <span sx={{ color: "primary", fontWeight: "heading" }}>@</span>
        {companyEmailEnding}
      </a>
    </section>
  );
};

export default ContactSection;
