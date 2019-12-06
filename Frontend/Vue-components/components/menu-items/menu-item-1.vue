<template>
  <nav>
    <ul>
      <li v-for="nav in navs" :key="nav">
        <a href="#">
          <span>{{ nav }}</span>
          <span>{{ nav }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
module.exports = {
  data() {
    return {
      navs: [ 'Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact' ]
    }
  }
}
</script>

<style scoped>
  * {
    --width: 60vw;
    --font-size: 20px;
    --time-animation: .3s;
    --colors--background: #333;
    --colors--nav--normal: #eee;
    --colors--nav--hover: #f43772;

    margin: 0;
    padding: 0;
  }
  nav {
    background: var(--colors--background);
    font-size: var(--font-size);
    width: var(--width);
    padding: .3em;
    position: sticky;
    top: 0;
    z-index: 10;
    border: 10px solid white;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
  ul li {
    list-style-type: none;
    overflow: hidden;
  }
  ul li a {
    display: block;
    height: 1.3em;
    text-transform: uppercase;
    text-decoration: none;
  }
  ul li a span {
    display: block;
  }
  ul li a span:nth-child(1) {
    color: var(--colors--nav--normal);
  }
  ul li a span:nth-child(2) {
    color: var(--colors--nav--hover);
  }
  ul li a {
    transition: transform var(--time-animation);
  }
  ul li:hover a {
    transform: translateY(calc(-100% + .1em));
  }

</style>
