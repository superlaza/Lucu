require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "UA-194871431-1",
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                process.env.GOOGLE_MEASUREMENT_ID, // Google Analytics / GA
              ],
            },
        },
        `gatsby-plugin-sass`,
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
            rule: {
              include: /\.svg$/
            }
          }
        }
    ]
}