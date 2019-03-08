<template>
  <Layout>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      excerpt: this.$page.post.excerpt
    };
  }
};
</script>

<style>
#ek, #ek td {
  border: 1px solid #000;
}
#ek a {
  text-decoration: none;
}
</style>