import { Helmet } from 'react-helmet'

import { ISeo } from 'interfaces/seo.interface'

const Seo = ({
  title,
  description,
  image,
  keywords,
  openGraph,
  robots,
  twitterSeo,
  type,
  url,
}: ISeo) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content="uxpin.com" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content={robots} />
        <meta name="image" content={image} />
        <meta name="url" content={url} />
        <meta name="type" content={type} />

        <link href="https://www.uxpin.com/" rel="canonical" />
      </Helmet>
      {openGraph && (
        <Helmet>
          <meta property="og:title" content={openGraph?.title} />
          <meta property="og:description" content={openGraph?.description} />
          <meta property="og:image" content={openGraph?.image} />
          <meta property="og:url" content={openGraph?.url} />
          <meta property="og:image:type" content={openGraph?.imageType} />
          <meta property="og:image:width" content={openGraph?.imageWidth} />
          <meta property="og:image:height" content={openGraph?.imageHeight} />
        </Helmet>
      )}
      {twitterSeo && (
        <Helmet>
          <meta name="twitter:title" content={twitterSeo?.title} />
          <meta name="twitter:description" content={twitterSeo?.description} />
          <meta name="twitter:image" content={twitterSeo?.image} />
          <meta name="twitter:site" content={twitterSeo?.site} />
          <meta name="twitter:creator" content={twitterSeo?.creator} />
          <meta name="twitter:url" content={twitterSeo?.url} />
          <meta name="twitter:card" content={twitterSeo?.card} />
          <meta name="twitter:image:width" content={twitterSeo?.imageWidth} />
          <meta name="twitter:image:height" content={twitterSeo?.imageHeight} />
        </Helmet>
      )}
    </>
  )
}

export default Seo
