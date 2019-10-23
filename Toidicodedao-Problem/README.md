# Toidicodedao problem: Count repeated characters

[To save a comment](https://www.youtube.com/watch?v=_BYY1p_7urw&lc=UgxcRCZXZtbSh_Fiqjd4AaABAg) about a coding problem at [10:58 in a video of toidicodedao channel](https://youtu.be/_BYY1p_7urw?t=658)

## Problem: Count repeated characters:
`"AABBCDDD" => "A2B2C1D3"`

#### My regex solution:
```javascript
function regexProcess(input) {
  return input
    .replace(/((.)(?!\2|$))/g, "$1|")
    .split("|")
    .map(repeated => repeated[0] + repeated.length)
    .join("")
}
```

#### My for-loop solution:
```javascript
function manualProcess(input) {
  if (input.length === 0) return ""

  const current = {
    result: "",
    char: input[0],
    count: 1,
  }

  for (var i = 1; i < input.length; i++) {

    if (input[i] === current.char) {
      current.count++
    }
    
    else {
      current.result += current.char + current.count
      current.char = input[i]
      current.count = 1
    }
  }

  current.result += current.char + current.count
  return current.result
}
```

<details>
  <summary>First for-loop attemption (having hidden bug)</summary>

```javascript
function manualProcess(input) {

  function onRepeating(currentResult) {
    // eg: "A1B2" => "A1B3"
    const newCount = +(currentResult.slice(-1)) + 1 // newCount = 3
    return currentResult.slice(0, -1) + newCount // "A1B" + 3
  }

  if (input.length === 0) return ""

  var result = input[0] + "1"

  for (var i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      result = onRepeating(result)
    } 
    
    else {
      result += input[i] + "1"
    }
  }

  return result
}
```
</details>

<details>
  <summary>To generate random input</summary>

```javascript
function generateInput (N) {
  return [...Array(N)]
    .map(_ => {
      const randomCharCode = ~~( Math.random() * ("Z".charCodeAt(0) - "A".charCodeAt(0)) + "A".charCodeAt(0) )
      return String.fromCharCode(randomCharCode).repeat(~~(Math.random() * 15))
    })
    .join("")
}
```
</details>

<details>
  <summary>Time testing</summary>

```javascript
for (const breakpoint of [100, 1000, 100000, 1000000, 5000000, 10000000]) {
  console.group(breakpoint)

  const input = generateInput(breakpoint)
  
  console.time("manual")
  const manual = manualProcess(input)
  console.timeEnd("manual")
  
  console.time("regex")
  const regex = regexProcess(input)
  console.timeEnd("regex")

  console.log("equal: ", manual === regex)
  console.groupEnd()
}

```
</details>


[**Full code after testing**](https://repl.it/@Huynh_LoiLoi/toidicodedao-problem)