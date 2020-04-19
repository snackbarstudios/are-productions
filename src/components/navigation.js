/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import NavMenuDesktop from "./navMenuDesktop";
import MobileNavigation from "./mobileNavigation";

const Navigation = () => {
  const { datoCmsNavigation } = useStaticQuery(
    graphql`
      query {
        datoCmsNavigation {
          navMenu {
            linkName
          }
        }
      }
    `
  );
  const { navMenu } = datoCmsNavigation;

  return (
    <nav
      sx={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        padding: 2
      }}
    >
      <MobileNavigation navitems={navMenu} />
      <div
        sx={{
          display: ["none", null, "block"],
          ml: "auto"
        }}
      >
        <NavMenuDesktop navitems={navMenu} />
      </div>
    </nav>
  );
};

export default Navigation;
