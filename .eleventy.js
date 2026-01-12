module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Add CNAME file for GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");
  
  // Create a collection for blog posts
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md");
  });
  
  // Add date filter for blog posts
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return dateObj.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });
  
  // Add excerpt filter
  eleventyConfig.addFilter("excerpt", (content) => {
    const excerpt = content.substring(0, 200);
    return excerpt + (content.length > 200 ? "..." : "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
