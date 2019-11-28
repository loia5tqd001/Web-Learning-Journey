<template>
  <div>
    <div class="holder">

      <ValidationObserver ref="observer" tag="form" @submit.prevent="addSkill">
        <ValidationProvider name="Skill" rules="min:5" #default="{ errors }">
          <input v-model="skill" type="text" placeholder="Enter a skill that you have.."/>
          <transition name="alert-in" enter-active-class="animated shake" leave-active-class="animated flipOutX">
            <span class="alert" v-if="errors[0]">{{ errors[0] }}</span>
          </transition>
        </ValidationProvider>
      </ValidationObserver>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key="index"> 
            {{ data.skill }}
            <i class="fa fa-minus-circle" @click="removeSkill(index)"/>
          </li>
        </transition-group>
      </ul>

      <p>These are skills that you posssess.</p>
    </div>
  </div>
</template>


<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'

export default {
  name: 'Skills',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      skills: [
        { skill: 'VueJS' },
        { skill: 'Frontend' },
      ],
      skill: '',
      name: 'Coursetro',
      buttonDisabled: true
    }
  },
  methods: {
    async addSkill() {
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        this.skills.push({ skill: this.skill })
        this.skill = ''
      }
    },
    removeSkill(index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>


<style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');

  .holder {
    background-color: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3rem;
    background-color: #e0edf4;
    border-left: 5px solid #3eb3f6;
    margin-bottom: 2px;
    color: #3e5252;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0 0 40px lightgray;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border: 0;
    padding: 20px;
    font-size: 1.3rem;
    background-color: #323333;
    color: #687f7f;
  }

  form {
    position: relative;
    margin-bottom: 2px;
  }

  .alert {
    position: absolute;
    left: 0;
    bottom: -50;
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }
  
</style>
