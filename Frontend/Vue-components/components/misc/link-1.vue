<template>
  <a :href="href" :target="target"><slot/></a>
</template>

<script>
module.exports = {
  props: {
    href: {
      type: String,
      default: '#'
    },
    target: {
      target: String,
      default: '_blank'
    }
  }
}

</script>

<style scoped>
  * {
    --translate: 1px;
    --minus-translate: calc(var(--translate) * -1);
  }
  a {
    display: inline-block;
    color: white;
    text-decoration: none;
    transition: .3s;
  }
  a:hover {
    text-shadow: var(--minus-translate) var(--translate) 0 #f43772;
    transform: translate(var(--translate), var(--minus-translate));
  }

</style>
