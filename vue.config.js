module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/personal-portfolio/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/styles";`,
      },
    },
  },
};