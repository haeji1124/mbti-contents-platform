import React from "react";
import { Helmet } from "react-helmet";
import { base_url } from "../../App";

const MetatagRenderer = ({ currentTest }) => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{currentTest?.info?.mainTitle}</title>
      <meta name="title" content={currentTest?.info?.mainTitle} />
      <meta name="description" content={currentTest?.info?.subTitle} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="canonical"
        href={base_url + `/${currentTest?.info?.mainUrl}`}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={base_url + `/${currentTest?.info?.mainUrl}`}
      />
      <meta property="og:title" content={currentTest?.info?.mainTitle} />
      <meta property="og:description" content={currentTest?.info?.subTitle} />
      <meta property="og:image" content={currentTest?.info?.thumbImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={base_url + `/${currentTest?.info?.mainUrl}`}
      />
      <meta property="twitter:title" content={currentTest?.info?.mainTitle} />
      <meta
        property="twitter:description"
        content={currentTest?.info?.subTitle}
      />
      <meta property="twitter:image" content={currentTest?.info?.thumbImage} />
    </Helmet>
  );
};

export default MetatagRenderer;
