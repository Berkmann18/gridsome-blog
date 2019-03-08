// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Gridsome Blog',
  //siteUrl: 'https://berkmann18.github.io/gridsome-blog/',
  siteDescription: 'A simple Gridsome blog from https://alligator.io/vuejs/gridsome-blog/',
  icon: 'src/favicon.png',
  transformers: {
    remark: {}
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'blog/**/*.md',
      typeName: 'Post'
    }
  }]
}