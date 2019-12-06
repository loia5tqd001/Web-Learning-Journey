<template>
  <div class="container">
    <div v-for="skill in skills" :key="skill.skill" class="skill">
      <card-progress v-bind="skill"></card-progress>
    </div>
  </div>
</template>

<script>

module.exports = {
  components: {
    'card-progress': httpVueLoader('../components/cards/card-progress.vue'),
  },
  data() {
    return {
      skills: [
        { skill: 'Html', percent: 60, color: '#00ff43' },
        { skill: 'Css', percent: 30, color: '#ff810f' },
        { skill: 'Javascript', percent: 65, color: '#ff0fe3' },
      ]
    }
  },
}

</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .container > .skill {
    margin: 5px;
  }
</style>
