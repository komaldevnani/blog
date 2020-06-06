module.exports = {
  siteMetadata: {
    siteUrl: `https://komaldevnani.netlify.app`,
    title: 'Komal Devnani',
    titleTemplate: "Komal Devnani. A Dancer and web developer",
    author: 'Komal Devnani',
    description: 'Komal Devnani is a multipotentialite',
    url: "https://komaldevnani.netlify.app", 
    image: "src/assets/images/avatar.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@komal_devnani",
    contactEmail: "komaldevnani00@gmail.com",
    authorSocialLinks: [
      { name: "github", url: "https://github.com/komaldevnani" },
      { name: "facebook", url: "https://facebook.com/innovativekomal" }
    ],
    socialLinks: [
      { url: 'https://github.com/komaldevnani', name: 'Github'},
      { url: 'https://www.hackerrank.com/komaldevnani', name: 'Hackerrank'},
      { url: 'https://www.instagram.com/discomal_', name: 'Instagram'},
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Komal-Devnani-portfolio-website',
        short_name: 'Komal\'Portfolio',
        start_url: '/',
        background_color: '#808080',
        theme_color: '#808080',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-168677536-1",
      }
    }
  ],
}
