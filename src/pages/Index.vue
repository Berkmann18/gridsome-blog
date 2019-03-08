<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    
    <h1>Hello, world!</h1>
   
    <p>The start of a new beginning.</p>

    <h3>My blogs</h3>
    <p v-for="post in $page.posts.edges" :key="post.node.id">
      <g-link :to="post.node.path">
        {{ post.node.title }}
      </g-link> - {{ post.node.excerpt }} <time>{{ timestamp2date(post.node.date) }}</time>
    </p>

    <h3>Some other stuff</h3>
    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
        excerpt
        date
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: {
    timestamp2date(ts) {
      let d = new Date(ts)
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
time {
  color: grey;
  font-style: italic;
}
</style>
