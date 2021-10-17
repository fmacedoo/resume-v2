module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "resume-v2",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
