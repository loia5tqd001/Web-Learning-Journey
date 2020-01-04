<template>
  <div class="about">
    <h1>Hello {{ name }}. This is about page.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repudiandae saepe aliquid dolore ratione fugit.</p>
  </div>  
</template>

<script>
export default {
  name: 'About',
  computed: {
    name() {
      return this.$route.params.name
    }
  }
}
</script>