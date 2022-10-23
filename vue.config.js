
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/_colors.scss";
        @import "@/assets/_fonts.scss";
        `
      },
    }
  }
}