Vue.component('health-status', {
  props: {
    classname: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    health: {
      type: Number,
      required: true
    },
    isattacked: {
      type: Boolean,
      required: true
    },
    ishealing: {
      type: Boolean,
      default: false
    },
    roundtime: {
      type: Number,
      required: true
    }
  },
  template: `
    <div class="status" :class="classname">
      <h1 class="name" :style="colorStyle" >{{ label }}</h1>
      <div class="health-bar">
        <div class="--remain" :style="remainStyle"></div>
        <div class="health-number">{{ health }}</div>
      </div>
    </div>
  `,
  computed: {
    _getColor() {
      if (this.isattacked) return '#EB0013'
      if (this.ishealing) return '#2EB1FF'
      return ''
    },
    colorStyle() {
      return { color: this._getColor }
    },
    remainStyle() {
      return {
        'background-color': this._getColor,
        width: `${this.health}%`,
        transition: `width ${this.roundtime}ms`,
      }
    }
  }
})

new Vue({
  el: '#app',
  data: {
    yourHealth: 100,
    monsterHealth: 100,
    isYouAttacked: false,
    isYouHealing: false,
    isMonsterAttacked: false,
    isPlaying: false,
    logs: [],
    ROUND_TIME: 300
  },
  computed: {
    isAttacking() {
      return this.isYouAttacked || this.isMonsterAttacked || this.isYouHealing
    }
  },
  methods: {
    startGame() {
      this.isPlaying = true
      this.logs = []
      this.yourHealth = 100
      this.monsterHealth = 100
      this.isYouAttacked = false
      this.isYouHealing = false
      this.isMonsterAttacked = false
    },

    _getRandomInt(min, max) {
      return parseInt(min + Math.random() * (max - min))
    },

    _youAttack({ isSpecial = false } = {}) {
      const damage = isSpecial
        ? this._getRandomInt(10, 20)
        : this._getRandomInt(5, 15)
      this.monsterHealth -= damage
      this.monsterHealth = Math.max(this.monsterHealth, 0)

      this.logs.unshift({
        text: `PLAYER HIT MONSTER ${isSpecial ? 'HARD ' : ''}FOR ${damage}`,
        className: '--player'
      })

      this.isMonsterAttacked = true
      setTimeout(() => {
        this.isMonsterAttacked = false
      }, this.ROUND_TIME)
    },

    _monsterAttack() {
      const damage = this._getRandomInt(7, 17)
      this.yourHealth -= damage
      this.yourHealth = Math.max(this.yourHealth, 0)

      this.logs.unshift({
        text: `MONSTER HIT PLAYER FOR ${damage}`,
        className: '--monster'
      })

      this.isYouAttacked = true
      setTimeout(() => {
        this.isYouAttacked = false
      }, this.ROUND_TIME)
    },

    _youHeal() {
      const hp = this._getRandomInt(7, 17)
      this.yourHealth += hp
      this.yourHealth = Math.min(this.yourHealth, 100)

      this.logs.unshift({
        text: `PLAYER ADDED HIMSELF ${hp} HP`,
        className: '--player --healing'
      })

      this.isYouHealing = true
      setTimeout(() => {
        this.isYouHealing = false
      }, this.ROUND_TIME)
    },

    _endGame(status) {
      this.isPlaying = false
      setTimeout(() => {
        alert(status)
      }, 0);
    },

    _checkEndGame() {
      const alreadyEnd = !this.isPlaying
      if (alreadyEnd) return alreadyEnd

      if (this.monsterHealth <= 0) {
        this._endGame('YOU WON')
      } else if (this.yourHealth <= 0) {
        this._endGame('YOU LOSED')
      }
      return !this.isPlaying
    },

    _onAction(action) {
      switch (action) {
        case 'ATTACK':
          this._youAttack()
          break

        case 'SPECIAL ATTACK':
          this._youAttack({ isSpecial: true })
          break

        case 'HEAL':
          this._youHeal()
          break

        default:
          console.warn('Something is wrong in _onAction')
          break
      }
      if (this._checkEndGame()) return

      setTimeout(() => {
        this._monsterAttack()
        if (this._checkEndGame()) return
      }, this.ROUND_TIME)
    },

    onAttack() {
      this._onAction('ATTACK')
    },
    onSpecialAttack() {
      this._onAction('SPECIAL ATTACK')
    },
    onHealing() {
      this._onAction('HEAL')
    },

    giveUp() {
      this._endGame('You have given up')
    }
  },
})

