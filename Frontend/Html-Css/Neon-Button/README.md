# Neon Button

:warning:	Neon effect uses **box-shadow** having bugs when the size of property **blur-radius** getting **too big**. Similar bugs reported here:
- https://stackoverflow.com/questions/32113389/chrome-box-shadow-bugs
- https://github.com/Dogfalo/materialize/issues/4580

## Captures
### Works well on small size
![](./github-img/capture-noglitch.gif)

### Effect broken when size getting large
![](./github-img/capture-glitch.gif)


## Checkout
- You can try changing the size to see the bug I mentioned above by adjusting the __$size__ variable at [`./css/style.scss, line 7`](https://github.com/loia5tqd001/LearnWebDev2/blob/e463f7e9aac7f2aaaecf785fb6033c003ca2f6ac/Neon-Button/css/style.scss#L7)

from
```scss
$size:             12px;
```
to
```scss
$size:             25px;
```

- Or _(for more easily)_ at [**codepen version here**](https://codepen.io/loia5tqd001/pen/WNeMOLz) _(css - line 7)_

