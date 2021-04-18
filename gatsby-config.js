require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                process.env.GOOGLE_MEASUREMENT_ID, // Google Analytics / GA
              ],
            },
          },
    ]
}