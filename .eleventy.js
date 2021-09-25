const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/media");
    eleventyConfig.addPassthroughCopy("src/admin/config.yml");
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath && outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            userShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
    
        return content;
      });
};
