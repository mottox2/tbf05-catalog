module.exports = {
  siteMetadata: {
    title: '技術書典5 カタログ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '技術書典5カタログ',
        short_name: 'starter',
        start_url: '/',
        background_color: '#4caf50',
        theme_color: '#4caf50',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components'
  ],
}
