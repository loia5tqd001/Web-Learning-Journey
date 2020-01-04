<template>
  <div class="container">
    <div v-for="skill in skillSorted" :key="skill.skill" class="skill">
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
        { skill: 'Html', percent: 35, color: '#ff810f' },
        { skill: 'Css', percent: 40, color: '#2c9fda' },
        { skill: 'Javascript', percent: 60, color: '#ffe30f' },
        { skill: 'VueJs', percent: 50, color: '#54c08d' },
        { skill: 'Git', percent: 55, color: '#e94e32' },
        { skill: 'Figma', percent: 35, color: '#ff0fe3' },
        { skill: 'Google Sheets', percent: 35, color: '#00ff43' },
        { skill: 'Photoshop', percent: 35, color: '#30c2f5' },
        { skill: 'Ubuntu', percent: 30, color: '#b8341e' },
        { skill: 'React', percent: 40, color: '#5fd4f4' },
      ]
    }
  },
  computed: {
    skillSorted() {
      return this.skills.sort((a, b) => b.percent - a.percent)
    }
  }
}

</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: .5rem;
  }
  .container > .skill {
    margin: 5px;
  }
</style>
