/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import InstagramIcon from "./instagramIcon";
import FacebookIcon from "./facebookIcon";

const Footer = () => {
  const { datoCmsSocialMediaSection } = useStaticQuery(
    graphql`
      query {
        datoCmsSocialMediaSection {
          facebookLink
          instagramLink
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
            my: 5
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
            my: 5
          }}
        >
          <InstagramIcon />
        </a>
      </div>
      <div
        sx={{
          textAlign: "center",
          fontSize: 0
        }}
      >
        © {new Date().getFullYear()}, Snackbar Studios
      </div>
    </footer>
  );
};

export default Footer;
