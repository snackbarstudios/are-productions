/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import InstagramIcon from "./instagramIcon";
import FacebookIcon from "./facebookIcon";

const Footer = () => {
  const { datoCmsSocialMediaSection, datoCmsFooter } = useStaticQuery(
    graphql`
      query {
        datoCmsSocialMediaSection {
          facebookLink
          instagramLink
        }
        datoCmsFooter {
          copyright
          copyrightEnding
        }
      }
    `
  );

  const { facebookLink, instagramLink } = datoCmsSocialMediaSection;
  return (
    <footer>
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <a
          href={facebookLink}
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            margin: 2,
            my: 4
          }}
        >
          <FacebookIcon />
        </a>
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            margin: 2,
            my: 4
          }}
        >
          <InstagramIcon />
        </a>
      </div>
      <div
        sx={{
          textAlign: "center",
          fontSize: 0,
          mt: 3
        }}
      >
        <p sx={{ px: [3, 5], mb: 0 }}>{datoCmsFooter.copyright}</p>
        <p sx={{ px: [3, 5] }}>{datoCmsFooter.copyrightEnding}</p>
        <a
          href="https://www.snackbarstudios.se/"
          sx={{
            mb: 0,
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            ":hover": {
              fontWeight: "heading"
            }
          }}
        >
          {new Date().getFullYear()} website powered by Snackbar Studios
        </a>
      </div>
    </footer>
  );
};

export default Footer;
