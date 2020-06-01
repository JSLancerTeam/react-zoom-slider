# react-zoom-slider
<!-- [![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url] -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Simple zoom slider image implemented in ReactJS

To run demo on your computer:
  - Clone this repository
  - `npm install`
  - `npm run dev`

### Screenshot


![alt text](https://raw.githubusercontent.com/JSLancerTeam/react-zoom-slider/master/images/demo.gif)

### Usage


### You can combine pivot and direction together

##### Slider Image
```
import SliderImage from 'react-zoom-slider';

const data = [
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
    text: 'img1'
  },
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
    text: 'img2'
  },
  {
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
    text: 'img3'
  },
  ...
];


<SliderImage 
  data={data} 
  width="500px" 
  showDescription={true} 
  direction="right" 
/>
```


##### Props
|Prop name |Prop type|Default value|Description|
|---------|---------|-------------|-----------|
data | array | Required | data |
width? | string | auto | set size for slider image |
direction? | left, right | right | direction when show zoom image |
showDescription? | boolean | true | show description of image 

### Author
- Tony Nguyen - nhattruong1811@gmail.com

### License
MIT

[package-url]: https://npmjs.org/package/react-zoom-slider