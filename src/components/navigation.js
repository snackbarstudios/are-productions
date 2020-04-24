/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { useState, useEffect } from "react";
import NavMenuDesktop from "./navMenuDesktop";
import NavigationMobile from "./navigationMobile";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";

const Navigation = () => {
  const { datoCmsNavigation } = useStaticQuery(
    graphql`
      query {
        datoCmsNavigation {
          navMenu {
            id
            linkName
            link {
              ... on DatoCmsAboutSection {
                id
                slug
              }
              ... on DatoCmsVideoSection {
                id
                slug
              }
              ... on DatoCmsContactSection {
                id
                slug
              }
            }
          }
        }
      }
    `
  );

  const { navMenu } = datoCmsNavigation;
  const [showBackground, setBackground] = useState(false);
  const MINIMUM_SCROLL = 800;
  const TIMEOUT_DELAY = 100;

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    // adds a bit of delay effect to the header’s hide/show movement after scrolling
    setTimeout(() => {
      setBackground(isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const [anchorBold, setAnchorBold] = useState(null);
  let observer;

  const [options, setOptions] = useState();

  useEffect(() => {
    if (typeof document !== `undefined`) {
      setOptions({
        root: document.body.querySelector(null),
        rootMargin: "0px",
        threshold: 0.3
      });

      observer = new IntersectionObserver(callback, options);
    }
  }, []);

  const callback = entries => {
    let anchorId;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anchorId = entry.target.id;
      }
    });

    if (anchorId) {
      setAnchorBold(anchorId);
    } else {
      setAnchorBold(null);
    }
  };

  useEffect(() => {
    if (navMenu.length) {
      navMenu.forEach(({ link }) => {
        const target = document.querySelector(`#${link.slug}`);
        if (target && typeof observer !== `undefined`) {
          observer.observe(target);
        }
      });
    }
  }, [navMenu, observer]);

  return (
    <nav
      sx={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
        height: "80px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        backgroundColor: showBackground ? "background" : "transparent",
        transform: showBackground
          ? "transform: translate3d(0, 0, 0);"
          : "translate3d(0, 0, 0)",
        transition: "all ease-out 0.5s"
      }}
    >
      <NavigationMobile
        sx={{
          display: ["block", "none", null],
          ml: "auto"
        }}
        navitems={navMenu}
        anchorBold={anchorBold}
      />
      <NavMenuDesktop
        sx={{
          display: ["none", "block", null],
          ml: "auto"
        }}
        navitems={navMenu}
        anchorBold={anchorBold}
      />
    </nav>
  );
};

export default Navigation;
