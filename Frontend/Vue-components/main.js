new Vue({
  el: '#app',
  components: {
    'menu-item-1': httpVueLoader('./components/menu-items/menu-item-1.vue'),
    'card-1': httpVueLoader('./components/cards/card-1.vue'),
    'skill-cards': httpVueLoader('./playground/skill-cards.vue'),
  }
})
