module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Are productions", // Navigation and Site Title
  titleAlt: "Dynamo Are", // Title for JSONLD
  description:
    "Based in Stockholm, Are Productions make awesome, boundary-pushing films with a special twist on branding and storytelling.",
  headline: "Film and advertisement movie production in Stockholm", // Headline for schema.org JSONLD
  url: "http://areproductions.se/", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "../src/assets/images/are-logo.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language
  keywords: "film, filmproduction, advertisemtn, movies",

  // JSONLD / Manifest
  favicon: "../src/assets/images/are-logo.png", // Used for manifest favicon generation
  shortName: "Are", // shortname for manifest. MUST be shorter than 12 characters
  author: "Are Productions", // Author for schemaORGJSONLD
  themeColor: "#810904",

  facebook: "Dynamo Consulting", // Facebook Site Name,
  instagram: "https://www.instagram.com/areproductions.se/?hl=sv"
  //   linkedIn: "https://www.linkedin.com/company/6375169/", // LinkedIn address,
  //   twitter: "", // Twitter Username
};
