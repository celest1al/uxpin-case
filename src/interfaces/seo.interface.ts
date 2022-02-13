export interface ISeo {
  title: string
  description: string
  siteName?: string
  url?: string
  type?: string
  keywords?: string
  robots?: string
  image?: string
  openGraph?: IOpenGraph
  twitterSeo?: ITwitterSeo
}

export interface IOpenGraph {
  title: string
  image: string
  description: string
  url: string
  imageType?: string
  imageWidth?: string
  imageHeight?: string
}

export interface ITwitterSeo {
  title: string
  image: string
  description: string
  site: string
  creator: string
  url: string
  card: string
  imageWidth?: string
  imageHeight?: string
}
