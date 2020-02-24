<template>
  <header class="header">

    <div class="header__info">
      <h1 class="header__name">{{ info.name }}</h1>
      <p class="header__aside-info" 
         v-for="other in info.others" 
         :key="other"
      >
        {{ other }}
      </p>
    </div>

    <div class="header__media">
      <p v-for="media in medias" :key="media.display">
        <a :href="media.href">
          <i :class="media.iconClass"></i>
          {{ media.display }}
        </a>
      </p>
    </div>
    
  </header>
</template>

<script>
const data = require('./data.json')

module.exports = {
  computed: {
    info() {
      return data ? data.info : {
        name: 'Lợi',
        others: []
      }
    },
    medias() {
      return data && data.medias
    }
  }
}
</script>

<style scoped>


</style>
