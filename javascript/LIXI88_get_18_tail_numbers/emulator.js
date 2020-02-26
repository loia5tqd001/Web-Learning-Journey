class Logger {
  static set value(val) {
    console.log(val)
  }
  static set arrToObj(arr) {
    const result = arr.reduce((acc, cur, index) => ({
      ...acc,
      [index]: cur
    }), {})
    this.value = result
  }
}

class Statistic {
  static record(lotteryResult) {
    if (!this.records) {
      this.records = Array(100).fill(0)
    }
    lotteryResult.forEach(number => {
      this.records[number]++
    })
  }

  static run(lotteryResults) {
    lotteryResults.forEach(result => {
      this.record(result)
    })
    return this.records
  }

  static get _total() {
    return this.records.reduce((a, b) => a + b, 0)
  }
  static get _medium() {
    return this._total / 100
  }

  static get variance() {
    const medium = this._medium
    return this.records.map(n => Math.abs(n - medium))
  }
  static get maxVariance() {
    return Math.max(...this.variance)
  }
  static get minVariance() {
    return Math.min(...this.variance)
  }
}

function randomIntBetween(min, max) {
  console.assert(min === ~~min)
  console.assert(max === ~~max)

  return Math.round(Math.random() * (max - min) + min)
}

function run1Lottery() {
  return Array(18).fill(null).map(x => randomIntBetween(0, 99))
}

function runNLottery(n) {
  return Array(n).fill(null).map(x => run1Lottery())
}


Logger.arrToObj = Statistic.run(runNLottery(100))
Logger.arrToObj = Statistic.variance
Logger.value = Statistic.maxVariance
Logger.value = Statistic.minVariance



