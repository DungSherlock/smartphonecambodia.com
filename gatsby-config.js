let facebook_pixel = ''
let gtm = '1234'

module.exports = {
  siteMetadata: {
    title: `Đại lý bia, nước ngọt - Nguyễn Văn Cương`,
    description: `Đại lý bia, nước ngọt`,
    author: `NGUYỄN VĂN CƯƠNG`,
    siteUrl: `https://smartphonecambodia.com/`,
    phone: '0917151296',
    fax: '0917151296',
    address: 'ĐƯỜNG 12C - TRƯỜNG YÊN - HOA LƯ',
    email: 'admin@smartphonecambodia.com'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/assets/images/gatsby-icon.png'
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`
  ],
}
