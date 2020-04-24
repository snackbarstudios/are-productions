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
          mt: 4
        }}
      >
        <p sx={{ px: [3, 5] }}>{datoCmsFooter.copyright}</p>
        <p> © {new Date().getFullYear()} website powered by Snackbar Studios</p>
      </div>
    </footer>
  );
};

export default Footer;
