# Responsive Navbar with React

[Tutorial link](https://www.youtube.com/watch?v=l6nmysZKHFU)

### Desktop

![][desktop]

### Mobile

|![][mobile]|![][mobile-open]|
|-|-|


[mobile]: ./screenshots/capture-mobile-closed.png
[mobile-open]: ./screenshots/capture-mobile-open.png
[desktop]: ./screenshots/capture-desktop.png

## Media query usages

<details>
<summary><strong>Without library</strong></summary>

[source](jsramblings.com/2018/02/04/styled-components-media-queries.html)

**In `media_query/index.js`**

```javascript
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
```

**Usage**

```javascript
import { device } from '../media_query'
//...
`
.hamburger-icon {
  display: none; // mobile first
  @media(device.tablet) {
    display: inline-block;
  }
}
`
//...
```
</details>

<details open>
<summary><strong>With <code>styled-media-query</code></strong></summary>

[source](https://github.com/morajabi/styled-media-query)

**Usage**

```javascript
import media from 'styled-media-query'
//...
`
.hamburger-icon {
  ${media.lessThan('medium')`
    display: none;
  `}
  ${media.greaterThan('medium')`
    display: inline-block;
  `}
}
`
//...
```

</details>