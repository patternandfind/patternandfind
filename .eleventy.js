module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    eleventyConfig.addPassthroughCopy("src/media");
    
    eleventyConfig.addPassthroughCopy("src/admin/config.yml");
};
