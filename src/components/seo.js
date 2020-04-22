import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ dynamicDescription, lang, meta, dynamicTitle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            pathPrefix
            title
            titleAlt
            description
            banner
            author
            headline
            siteLanguage
            ogLanguage
            facebook
            instagram
          }
        }
      }
    `
  );

  const {
    siteUrl,
    title,
    description,
    banner,
    author,
    headline,
    siteLanguage
  } = site.siteMetadata;

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: site.siteMetadata.siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: description,
    name: title,
    author: {
      "@type": "Person",
      name: author
    },
    copyrightHolder: {
      "@type": "Person",
      name: author
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Person",
      name: author
    },
    datePublished: new Date().getFullYear(),
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${banner}`
    }
  };

  const metaDescription = dynamicDescription || description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: banner
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: dynamicTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
