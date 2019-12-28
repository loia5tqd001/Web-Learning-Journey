### Scraping movie data in the Netflix page 

- For [a project of school](https://github.com/loia5tqd001/Project-Clone-Netflix-For-HCI-Class)
- [Result](https://nostalgic-lichterman-4cf223.netlify.com/)

```javascript
var carouselNodes = document.querySelectorAll('.lolomoRow.lolomoRow_title_card:not(.lolomoBigRow):not(lolomoPreview)')

var carouselsInArray = Array.from(carouselNodes)

var carousels = carouselsInArray.map(carousel => {
  var headerNode = carousel.querySelector('h2.rowHeader .row-header-title')
  var header = headerNode.innerText
  
  var movieLinkNodes = carousel.querySelectorAll('.rowContainer .slider .slider-item a')
  var movieLinks = Array.from(movieLinkNodes)
  var movies = movieLinks.map(a => ({
    name: a.getAttribute('aria-label'),
    imgSrc: a.querySelector('img').src
  }))

  return {
    header,
    movies
  }
})

var result = JSON.stringify(carousels, null, 2)
```

![](./netflix-page-capture.png)