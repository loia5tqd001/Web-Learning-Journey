<template>
  <div class="card">
    <div class="percent">
      <svg>
        <circle v-bind="circle"></circle>
        <circle v-bind="circle" :stroke-dasharray="progress" :stroke="color"></circle>
      </svg>
      <h2>{{percent}}<span>%</span></h2>
    </div>
    <h2 class="text">{{skill}}</h2> 
  </div>
</template>

<script>

module.exports = {
  props: {
    skill: {
      type: String,
      default: 'Html'
    },
    percent: {
      type: [String, Number],
      default: 60
    },
    color: {
      type: String,
      default: '#00ff43'
    }
  },
  data() {
    return {
      strokeWidth: 8,
    }
  },
  computed: {
    circle() {
      return {
        cx: '50%',
        cy: '50%',
        r: +((100 - this.strokeWidth) / 2) + '%',
        'stroke-width': this.strokeWidth + '%'
      }
    },
    progress() {
      const get = (this.percent - this.strokeWidth / 2) * Math.PI
      const lost = (100 - this.percent) * Math.PI
      return `${get}% ${lost}%`
    }
  }
}

</script>

<style scoped>
  * {
    --width: 250px;
    --height: 300px;
    --circle-width: 150px;
    --color1: #1b1b1b;
    --color2: #222;
    --text-color: #777;
    --text-color-hover: #fff;
    --transition-time: .3s;
    --translateY: translateY(-3px);
  }
  .card {
    position: relative;
    width: var(--width);
    height: var(--height);
    background: linear-gradient(0deg, var(--color1), var(--color2), var(--color1));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: .2rem;
    cursor: default;
    transition: transform var(--transition-time), 
                box-shadow var(--transition-time);
  }
  .card:hover {
    transform: var(--translateY);
    box-shadow: 0 10px 25px rgba(0,0,0,.3);
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255,255,255,.03);
  }

  .percent {
    position: relative;
    width: var(--circle-width);
    height: var(--circle-width);
    border-radius: 50%;
    box-shadow: inset 0 0 calc(var(--circle-width) * .4) #000;
    background: var(--color2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
  }
  .card:hover .percent {
    transform: var(--translateY);
  }
  .percent svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .percent svg circle {
    fill: none;
    stroke-linecap: round;
  }
  .percent svg circle:nth-child(1) {
    stroke: var(--color1);
  }
  .percent h2 {
    color: var(--text-color);
    font-weight: 700;
    font-size: 2.5rem;
    transition: color var(--transition-time),
                font-size var(--transition-time);
  }
  .percent h2 span {
    font-size: 1.5rem;
  }
  .card:hover .percent h2 {
    color: var(--text-color-hover);
    font-size: 3.5rem;
  }

  .text {
    color: var(--text-color);
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color var(--transition-time),
                transform var(--transition-time);
  }
  .card:hover .text {
    color: var(--text-color-hover);
    transform: var(--translateY);
  }

</style>
