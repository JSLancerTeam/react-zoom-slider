# react-responsive-timeline
<!-- [![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url] -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Simple responsive timeline implemented in ReactJS

### Demo

Live demo:
- codesanbox:  https://codesandbox.io/s/react-responsive-timeline-q8vsn
- stackblitz: https://stackblitz.com/edit/react-responsive-timeline


To run demo on your computer:
  - Clone this repository
  - `yarn install`
  - `yarn run dev`

### Screenshot

pivot: vertical

direction: left

![alt text](https://raw.githubusercontent.com/JSLancerTeam/react-responsive-timeline/master/images/screen-shot.png)

pivot: vertical

direction: center

tooltip: true

![alt text](https://raw.githubusercontent.com/JSLancerTeam/react-responsive-timeline/master/images/tooltip.png)

### Usage


### You can combine pivot and direction together

##### Slider Image
```
import SliderImage from 'react-zoom-slider';

<SliderImage
  pivot="vertical"
  direction="left"
  tooltip={true}
  textLimit="none"
  timelines={[
    {
      title: 'C.A. Alexander, A Pattern Language, New York,, 1977.',
      sub: '10 May 2020',
    },
    {
      title: 'E. Yourdon, L. Constantine, Structured Design, N.J.,, 1978.',
      sub: '12 May 2020',
    },
    {
      title: 'C.A. Alexander, The Timeless Way of Building, New York,, 1979.',
      sub: '05 July 2020',
    }
  ]} />
```


##### Props
|Prop name |Prop type|Default value|Description|
|---------|---------|-------------|-----------|
timelines | array | Required | data |
pivot | string | vertical | Describe vertical, horizontal |
direction | string | left | Describe left, center, right |
tooltip | boolean | false | show tooltip |
textLimit | string | none | set limit text. Or a css px string. Eg: <b>"100px"</b>, <b>"200px"</b> ... |

### Author
- Tony Nguyen - nhattruong1811@gmail.com

### License
MIT

[package-url]: https://npmjs.org/package/react-responsive-timeline